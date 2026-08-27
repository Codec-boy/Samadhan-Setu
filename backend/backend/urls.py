from pathlib import Path
from django.contrib import admin
from django.urls import path, include
from django.http import FileResponse, Http404
from django.conf import settings
from django.conf.urls.static import static

PROJECT_ROOT = settings.BASE_DIR.parent.resolve()


def serve_index(request):
    file_path = PROJECT_ROOT / 'index.html'
    if file_path.exists():
        return FileResponse(open(file_path, 'rb'), content_type='text/html')
    raise Http404("index.html not found")


def serve_root_file(request, path):
    """
    Secure static file server for local dev frontend files.
    Strictly prevents Path Traversal attacks (../.env, ../db.sqlite3) and sensitive file exposure.
    """
    try:
        file_path = (PROJECT_ROOT / path).resolve()
    except Exception:
        raise Http404("Access denied")

    # 1. Path Traversal Check: Ensure resolved path stays strictly inside PROJECT_ROOT
    if not file_path.is_relative_to(PROJECT_ROOT):
        raise Http404("Access denied")

    # 2. Sensitive File Access Block: Block secrets, env files, python source, databases
    forbidden_names = {'.env', '.gitignore', 'db.sqlite3', 'db.sqlite3.backup'}
    forbidden_exts = {'.py', '.env', '.sqlite3', '.sqlite'}
    if file_path.name.lower() in forbidden_names or file_path.suffix.lower() in forbidden_exts:
        raise Http404("Access denied")

    if file_path.exists() and file_path.is_file():
        ext = file_path.suffix.lower()
        mime_types = {
            '.css': 'text/css',
            '.js': 'application/javascript',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon',
            '.json': 'application/json',
            '.webp': 'image/webp'
        }
        content_type = mime_types.get(ext, 'application/octet-stream')
        return FileResponse(open(file_path, 'rb'), content_type=content_type)

    raise Http404("File not found")


urlpatterns = [
    path('', serve_index),
    path('admin/', admin.site.urls),
    path('api/auth/', include('auth_api.urls')),
    path('api/issues/', include('issues.urls')),
    path('<path:path>', serve_root_file),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)