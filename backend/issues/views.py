import json
import base64
import uuid
import io
from functools import wraps

from django.http import JsonResponse
from django.core.files.base import ContentFile
from django.views.decorators.csrf import csrf_exempt
from PIL import Image

from .models import Issue, IssueImage, Review, Worker

MAX_IMAGE_SIZE_BYTES = 10 * 1024 * 1024  # 10 MB limit per image
MAX_IMAGES_PER_ISSUE = 5
ALLOWED_IMAGE_FORMATS = {'JPEG', 'PNG', 'WEBP'}


# ---------------------------------------------------------------------------
# Helpers & Serializers
# ---------------------------------------------------------------------------

def serialize_issue(issue, request=None, is_admin=False):
    """
    Serialize issue details.
    Citizen name & phone are included ONLY for admin context or internal owner details.
    """
    image_urls = []
    
    # Collect primary image if exists
    if issue.image:
        try:
            url = request.build_absolute_uri(issue.image.url) if request else issue.image.url
            image_urls.append(url)
        except Exception:
            image_urls.append(str(issue.image))

    # Collect additional multi-images
    for img_obj in issue.images.all():
        try:
            url = request.build_absolute_uri(img_obj.image.url) if request else img_obj.image.url
            if url not in image_urls:
                image_urls.append(url)
        except Exception:
            pass

    data = {
        "id": issue.issue_id,
        "title": issue.title,
        "description": issue.description,
        "category": issue.category,
        "location": issue.location,
        "lat": issue.lat,
        "lng": issue.lng,
        "status": issue.status,
        "priority": issue.priority,
        "type": issue.issue_type,
        "image": image_urls[0] if image_urls else None,
        "images": image_urls,
        "createdAt": issue.created_at.isoformat() if issue.created_at else None,
        "updatedAt": issue.updated_at.isoformat() if issue.updated_at else None,
    }

    if is_admin:
        data["citizenName"] = issue.citizen_name
        data["citizenPhone"] = issue.citizen_phone
    else:
        data["citizenName"] = issue.citizen_name or "Anonymous Citizen"

    return data


def serialize_public_track(issue, request=None):
    """
    Safe public response for Track Issue endpoint.
    Excludes citizen name, phone number, user IDs, and private details.
    """
    image_urls = []
    if issue.image:
        try:
            url = request.build_absolute_uri(issue.image.url) if request else issue.image.url
            image_urls.append(url)
        except Exception:
            pass

    for img_obj in issue.images.all():
        try:
            url = request.build_absolute_uri(img_obj.image.url) if request else img_obj.image.url
            if url not in image_urls:
                image_urls.append(url)
        except Exception:
            pass

    return {
        "id": issue.issue_id,
        "title": issue.title,
        "description": issue.description,
        "category": issue.category,
        "status": issue.status,
        "priority": issue.priority,
        "location": issue.location,
        "image": image_urls[0] if image_urls else None,
        "images": image_urls,
        "createdAt": issue.created_at.isoformat() if issue.created_at else None,
        "updatedAt": issue.updated_at.isoformat() if issue.updated_at else None,
    }


def admin_required(view_func):
    """
    Enforces admin (is_staff or is_superuser) access.
    401 if unauthenticated, 403 if non-admin citizen.
    """
    @wraps(view_func)
    def _wrapped(request, *args, **kwargs):
        if not request.user.is_authenticated:
            return JsonResponse({"error": "Authentication required. Please log in as admin."}, status=401)
        if not (request.user.is_staff or request.user.is_superuser):
            return JsonResponse({"error": "Admin access required."}, status=403)
        return view_func(request, *args, **kwargs)
    return _wrapped


def _validate_and_save_image(raw_image_str):
    """
    Decodes and validates a base64 or binary image payload.
    Enforces max 10MB limit and validates JPEG/PNG/WEBP format using Pillow.
    Returns (ContentFile, error_message, status_code).
    """
    if not raw_image_str or not isinstance(raw_image_str, str):
        return None, "Invalid image data", 400

    if "," in raw_image_str:
        header, base64_str = raw_image_str.split(",", 1)
    else:
        base64_str = raw_image_str

    try:
        decoded_bytes = base64.b64decode(base64_str)
    except Exception:
        return None, "Invalid Base64 image string", 400

    # 1. Enforce 10 MB size limit
    if len(decoded_bytes) > MAX_IMAGE_SIZE_BYTES:
        return None, "Image exceeds the 10 MB limit. Please choose a smaller image.", 413

    # 2. Server-side format and integrity validation using Pillow
    try:
        pil_image = Image.open(io.BytesIO(decoded_bytes))
        image_format = (pil_image.format or "").upper()
        if image_format not in ALLOWED_IMAGE_FORMATS:
            return None, f"Unsupported image format: {image_format}. Allowed formats: JPG, PNG, WEBP", 400
        pil_image.verify()  # Verifies file integrity
    except Exception:
        return None, "Corrupted or invalid image file", 400

    ext_map = {'JPEG': 'jpg', 'PNG': 'png', 'WEBP': 'webp'}
    ext = ext_map.get(image_format, 'jpg')
    filename = f"issue_{uuid.uuid4().hex[:10]}.{ext}"
    return ContentFile(decoded_bytes, name=filename), None, 200


# ---------------------------------------------------------------------------
# POST /api/issues/submit/ — Frictionless Public Submission (No Login Required)
# ---------------------------------------------------------------------------
@csrf_exempt
def submit_issue(request):
    if request.method != "POST":
        return JsonResponse({"error": "Only POST method allowed"}, status=405)

    try:
        data = json.loads(request.body)
    except (json.JSONDecodeError, ValueError):
        return JsonResponse({"error": "Invalid JSON body"}, status=400)

    title = (data.get("title") or "").strip()
    citizen_name = (data.get("citizen_name") or data.get("name") or "").strip()
    citizen_phone = (data.get("citizen_phone") or data.get("phone") or "").strip()

    if not title:
        return JsonResponse({"error": "Title is required"}, status=400)
    if not citizen_name:
        return JsonResponse({"error": "Full Name is required"}, status=400)
    if not citizen_phone:
        return JsonResponse({"error": "Mobile Phone Number is required"}, status=400)

    # Process images list (accepts array of base64 strings or single image)
    raw_images = data.get("images") or []
    if not raw_images and data.get("image"):
        raw_images = [data.get("image")]

    if len(raw_images) > MAX_IMAGES_PER_ISSUE:
        return JsonResponse({"error": "You can upload a maximum of 5 images per complaint."}, status=400)

    validated_files = []
    for raw_img in raw_images:
        content_file, err_msg, status_code = _validate_and_save_image(raw_img)
        if err_msg:
            return JsonResponse({"error": err_msg}, status=status_code)
        validated_files.append(content_file)

    issue = Issue(
        title=title,
        citizen_name=citizen_name,
        citizen_phone=citizen_phone,
        description=(data.get("description") or "").strip(),
        category=data.get("category", "other"),
        location=(data.get("location") or "").strip(),
        lat=data.get("lat"),
        lng=data.get("lng"),
        priority=data.get("priority", "minor"),
        status="submitted",
        user=request.user if request.user.is_authenticated else None,
    )

    if validated_files:
        issue.image.save(validated_files[0].name, validated_files[0], save=False)

    issue.save()

    # Save additional images to IssueImage model
    for file_obj in validated_files:
        IssueImage.objects.create(issue=issue, image=file_obj)

    return JsonResponse({
        "message": "Complaint submitted successfully",
        "issueId": issue.issue_id,
        "issue": serialize_issue(issue, request, is_admin=False),
    }, status=201)


# ---------------------------------------------------------------------------
# GET /api/issues/all/ — Admin Only Access
# ---------------------------------------------------------------------------
@csrf_exempt
@admin_required
def get_all_issues(request):
    if request.method != "GET":
        return JsonResponse({"error": "Only GET method allowed"}, status=405)

    issues = Issue.objects.all().order_by('-created_at')
    serialized = [serialize_issue(issue, request, is_admin=True) for issue in issues]
    return JsonResponse(serialized, safe=False)


# ---------------------------------------------------------------------------
# GET /api/issues/track/<issue_id>/ — Public Safe Tracking
# ---------------------------------------------------------------------------
@csrf_exempt
def track_issue(request, issue_id):
    if request.method != "GET":
        return JsonResponse({"error": "Only GET method allowed"}, status=405)

    try:
        issue = Issue.objects.get(issue_id=issue_id)
        is_admin = request.user.is_authenticated and (request.user.is_staff or request.user.is_superuser)
        if is_admin:
            return JsonResponse({"found": True, "issue": serialize_issue(issue, request, is_admin=True)})
        return JsonResponse({"found": True, "issue": serialize_public_track(issue, request)})
    except Issue.DoesNotExist:
        return JsonResponse({"error": "Track ID not found", "found": False}, status=404)


# ---------------------------------------------------------------------------
# GET /api/issues/stats/ — System Metrics Counter
# ---------------------------------------------------------------------------
@csrf_exempt
def get_issue_stats(request):
    if request.method != "GET":
        return JsonResponse({"error": "Only GET method allowed"}, status=405)

    total = Issue.objects.count()
    open_count = Issue.objects.filter(status__in=["submitted", "open", "pending"]).count()
    in_progress = Issue.objects.filter(status__in=["dispatched", "in-progress", "otp-verification"]).count()
    resolved = Issue.objects.filter(status="resolved").count()
    rejected = Issue.objects.filter(status__in=["rejected", "escalated"]).count()

    return JsonResponse({
        "total": total,
        "open": open_count,
        "inProgress": in_progress,
        "resolved": resolved,
        "rejected": rejected,
    })


# ---------------------------------------------------------------------------
# DELETE /api/issues/<issue_id>/delete/ — Admin Only
# ---------------------------------------------------------------------------
@csrf_exempt
@admin_required
def delete_issue(request, issue_id):
    if request.method != "DELETE":
        return JsonResponse({"error": "Only DELETE method allowed"}, status=405)

    try:
        issue = Issue.objects.get(issue_id=issue_id)
        issue.delete()
        return JsonResponse({"message": "Issue deleted successfully"})
    except Issue.DoesNotExist:
        return JsonResponse({"error": "Issue not found"}, status=404)


# ---------------------------------------------------------------------------
# PATCH /api/issues/<issue_id>/status/ — Admin Only Status Transition
# ---------------------------------------------------------------------------
@csrf_exempt
@admin_required
def update_issue_status(request, issue_id):
    if request.method != "PATCH":
        return JsonResponse({"error": "Only PATCH method allowed"}, status=405)

    try:
        data = json.loads(request.body)
        new_status = (data.get("status") or "").strip().lower()

        valid_statuses = ["submitted", "pending", "dispatched", "in-progress", "otp-verification", "resolved", "rejected", "escalated"]
        if new_status not in valid_statuses:
            return JsonResponse({"error": f"Invalid status. Must be one of: {valid_statuses}"}, status=400)

        issue = Issue.objects.get(issue_id=issue_id)
        issue.status = new_status
        issue.save()
        return JsonResponse({"message": "Status updated successfully", "issue": serialize_issue(issue, request, is_admin=True)})
    except Issue.DoesNotExist:
        return JsonResponse({"error": "Issue not found"}, status=404)
    except (json.JSONDecodeError, ValueError):
        return JsonResponse({"error": "Invalid JSON body"}, status=400)


# ---------------------------------------------------------------------------
# Reviews APIs — SQLite Database Persistence
# ---------------------------------------------------------------------------
@csrf_exempt
def handle_reviews(request):
    """GET list of approved reviews / POST new community review."""
    if request.method == "GET":
        reviews = Review.objects.filter(is_approved=True).order_by('-created_at')
        serialized = [{
            "id": r.id,
            "authorName": r.author_name,
            "rating": r.rating,
            "review": r.review_text,
            "createdAt": r.created_at.isoformat()
        } for r in reviews]
        return JsonResponse(serialized, safe=False)

    elif request.method == "POST":
        try:
            data = json.loads(request.body)
            author_name = (data.get("authorName") or data.get("name") or "Anonymous Citizen").strip()
            rating = int(data.get("rating") or 5)
            review_text = (data.get("review") or data.get("text") or "").strip()

            if not review_text:
                return JsonResponse({"error": "Review text is required"}, status=400)
            if rating < 1 or rating > 5:
                return JsonResponse({"error": "Rating must be between 1 and 5 stars"}, status=400)

            review = Review.objects.create(
                author_name=author_name,
                rating=rating,
                review_text=review_text
            )
            return JsonResponse({
                "message": "Review submitted successfully",
                "review": {
                    "id": review.id,
                    "authorName": review.author_name,
                    "rating": review.rating,
                    "review": review.review_text,
                    "createdAt": review.created_at.isoformat()
                }
            }, status=201)
        except (json.JSONDecodeError, ValueError):
            return JsonResponse({"error": "Invalid JSON payload"}, status=400)

    return JsonResponse({"error": "Method not allowed"}, status=405)


# ---------------------------------------------------------------------------
# Workers APIs — SQLite Database Persistence
# ---------------------------------------------------------------------------
@csrf_exempt
def handle_workers(request):
    """GET directory of workers / POST register new private worker."""
    if request.method == "GET":
        role = request.GET.get("role", "").strip()
        sort_by = request.GET.get("sort", "rating").strip()

        workers = Worker.objects.all()
        if role:
            workers = workers.filter(job_role__iexact=role)

        if sort_by == "completed":
            workers = workers.order_by('-completed_jobs')
        elif sort_by == "experience":
            workers = workers.order_by('-experience')
        else:
            workers = workers.order_by('-rating')

        serialized = [{
            "id": w.id,
            "name": w.name,
            "jobRole": w.job_role,
            "phone": w.phone,
            "email": w.email,
            "experience": w.experience,
            "address": w.address,
            "rating": w.rating,
            "completedJobs": w.completed_jobs,
            "status": w.status
        } for w in workers]
        return JsonResponse(serialized, safe=False)

    elif request.method == "POST":
        try:
            data = json.loads(request.body)
            name = (data.get("name") or "").strip()
            job_role = (data.get("jobRole") or "").strip()
            phone = (data.get("phone") or "").strip()

            if not name or not job_role or not phone:
                return JsonResponse({"error": "Name, job role, and phone number are required"}, status=400)

            worker = Worker.objects.create(
                name=name,
                job_role=job_role,
                phone=phone,
                email=(data.get("email") or "").strip(),
                experience=int(data.get("experience") or 0),
                address=(data.get("address") or "").strip(),
            )
            return JsonResponse({
                "message": "Worker registered successfully",
                "worker": {
                    "id": worker.id,
                    "name": worker.name,
                    "jobRole": worker.job_role,
                    "phone": worker.phone,
                    "rating": worker.rating
                }
            }, status=201)
        except (json.JSONDecodeError, ValueError):
            return JsonResponse({"error": "Invalid JSON payload"}, status=400)

    return JsonResponse({"error": "Method not allowed"}, status=405)