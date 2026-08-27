import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.environ.get(
    "DJANGO_SECRET_KEY",
    "django-insecure-d$w$u9719!=n%7m(2y=(^7m*^0_&zr6eu5zm4=8y&uu9hqpk7b"
)

DEBUG = os.environ.get("DJANGO_DEBUG", "True").lower() == "true"

ALLOWED_HOSTS = [
    host.strip()
    for host in os.environ.get(
        "DJANGO_ALLOWED_HOSTS",
        "127.0.0.1,localhost"
    ).split(",")
    if host.strip()
]

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'issues',
    'auth_api',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

# ===== CORS & Security Headers =====
CORS_ALLOW_ALL_ORIGINS = os.environ.get("DJANGO_CORS_ALLOW_ALL", "False" if not DEBUG else "True").lower() == "true"
CORS_ALLOW_CREDENTIALS = True

cors_origins = os.environ.get("DJANGO_CORS_ALLOWED_ORIGINS", "")
if cors_origins:
    CORS_ALLOWED_ORIGINS = [origin.strip() for origin in cors_origins.split(",") if origin.strip()]

# ===== Session & CSRF Security =====
SESSION_COOKIE_HTTPONLY = True
SESSION_COOKIE_SAMESITE = 'Lax'
SESSION_COOKIE_SECURE = os.environ.get("DJANGO_SECURE_COOKIES", "False").lower() == "true"
CSRF_COOKIE_SECURE = os.environ.get("DJANGO_SECURE_COOKIES", "False").lower() == "true"

if os.environ.get("DJANGO_SECURE_COOKIES", "False").lower() == "true":
    SECURE_SSL_REDIRECT = True
    SECURE_HSTS_SECONDS = 31536000  # 1 year
    SECURE_HSTS_INCLUDE_SUBDOMAINS = True
    SECURE_HSTS_PRELOAD = True
    SECURE_CONTENT_TYPE_NOSNIFF = True
    X_FRAME_OPTIONS = 'DENY'

# Allow frontend served from local file and common local dev origins
default_csrf_origins = [
    'http://127.0.0.1:8000',
    'http://localhost:8000',
    'http://localhost:5500',
    'http://127.0.0.1:5500',
]
extra_csrf = os.environ.get("DJANGO_CSRF_TRUSTED_ORIGINS", "")
if extra_csrf:
    default_csrf_origins.extend([o.strip() for o in extra_csrf.split(",") if o.strip()])
CSRF_TRUSTED_ORIGINS = default_csrf_origins

# ===== Media Files (Image Uploads) =====
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
