from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Issue

def serialize_issue(issue):
    return {
        "id": issue.issue_id,
        "title": issue.title,
        "description": issue.description,
        "category": issue.category,
        "location": issue.location,
        "lat": issue.lat,
        "lng": issue.lng,
        "status": issue.status,
        "priority": issue.priority,
        "image": issue.image,
        "createdAt": issue.created_at.isoformat() if issue.created_at else None,
        "updatedAt": issue.updated_at.isoformat() if issue.updated_at else None,
        "upvotes": 0,
        "upvotedBy": [],
        "comments": [],
        "escalationHistory": []
    }

@csrf_exempt
def submit_issue(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            
            issue = Issue.objects.create(
                title=data.get("title", ""),
                description=data.get("description", ""),
                category=data.get("category", "other"),
                location=data.get("location", ""),
                lat=data.get("lat"),
                lng=data.get("lng"),
                priority=data.get("priority", "minor"),
                status=data.get("status", "submitted"),
                image=data.get("image"),
                user=request.user if request.user.is_authenticated else None
            )

            return JsonResponse({
                "message": "Issue submitted successfully",
                "issue": serialize_issue(issue)
            }, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Only POST method allowed"}, status=405)

@csrf_exempt
def get_all_issues(request):
    if request.method == "GET":
        issues = Issue.objects.all().order_by('-created_at')
        serialized = [serialize_issue(issue) for issue in issues]
        return JsonResponse(serialized, safe=False)
    return JsonResponse({"error": "Only GET method allowed"}, status=405)

@csrf_exempt
def get_user_issues(request):
    if not request.user.is_authenticated:
        return JsonResponse({"error": "Login required"}, status=401)

    issues = Issue.objects.filter(user=request.user).order_by('-created_at')
    serialized = [serialize_issue(issue) for issue in issues]
    return JsonResponse({"issues": serialized})

@csrf_exempt
def delete_issue(request, issue_id):
    if request.method == "DELETE":
        try:
            issue = Issue.objects.get(issue_id=issue_id)
            issue.delete()
            return JsonResponse({"message": "Issue deleted successfully"})
        except Issue.DoesNotExist:
            return JsonResponse({"error": "Issue not found"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Only DELETE method allowed"}, status=405)