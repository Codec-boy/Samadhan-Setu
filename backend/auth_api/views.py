from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
import json


def _safe_user(user):
    """Return a safe dict for an authenticated Admin user."""
    return {
        "id": user.pk,
        "username": user.username,
        "email": user.email,
        "is_staff": user.is_staff,
        "is_superuser": user.is_superuser,
        "is_admin": user.is_staff or user.is_superuser,
    }


@csrf_exempt
def signup(request):
    """Public citizen signup disabled. Admin accounts are managed by CLI."""
    return JsonResponse({
        "error": "Public registration is disabled. Citizens submit complaints without accounts. Admin accounts are created via server administration."
    }, status=403)


@csrf_exempt
def user_login(request):
    """
    Authenticate and log in an Admin user.
    Creates a Django session on success if user is staff or superuser.
    """
    if request.method != "POST":
        return JsonResponse({"error": "Only POST method allowed"}, status=405)

    try:
        data = json.loads(request.body)
    except (json.JSONDecodeError, ValueError):
        return JsonResponse({"error": "Invalid JSON body"}, status=400)

    username = (data.get("username") or "").strip()
    password = data.get("password") or ""

    if not username or not password:
        return JsonResponse({"error": "Username and password are required"}, status=400)

    user = authenticate(request, username=username, password=password)

    if user is None:
        return JsonResponse({"error": "Invalid admin credentials"}, status=401)

    if not user.is_active:
        return JsonResponse({"error": "Account is disabled"}, status=403)

    if not (user.is_staff or user.is_superuser):
        return JsonResponse({"error": "Admin portal access required. Account lacks administrative privileges."}, status=403)

    login(request, user)  # Creates Django session

    return JsonResponse({
        "success": True,
        "message": "Admin login successful",
        "user": _safe_user(user),
    })


@csrf_exempt
def user_logout(request):
    """Destroy the current Django admin session."""
    if request.method != "POST":
        return JsonResponse({"error": "Only POST method allowed"}, status=405)

    logout(request)
    return JsonResponse({"success": True, "message": "Logged out successfully"})


def current_user(request):
    """
    Return the currently authenticated admin user.
    Returns 401 if not authenticated.
    """
    if request.method != "GET":
        return JsonResponse({"error": "Only GET method allowed"}, status=405)

    if not request.user.is_authenticated or not (request.user.is_staff or request.user.is_superuser):
        return JsonResponse({"authenticated": False}, status=401)

    return JsonResponse({
        "authenticated": True,
        "user": _safe_user(request.user),
    })
