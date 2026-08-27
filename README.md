# SamadhanSetu – Civic Issue Reporting Platform

## Overview

**SamadhanSetu** is a web-based platform that enables citizens to report civic issues—such as infrastructure damage, utility failures, and public safety concerns—with descriptions, images, and map-based geolocation. The system features role-based access control (RBAC), allowing municipal administrators to track, update, and manage complaints through an interactive admin dashboard.

---

## Features

### Citizen Features
- **Issue Reporting:** Submit complaints with title, description, category, priority, and location.
- **Media Uploads:** Attach photo evidence (stored securely via base64 encoding).
- **Map Geolocation:** Interactive map selection using Leaflet / OpenStreetMap.
- **Issue Tracking:** Real-time tracking by unique Issue ID (`CP-<timestamp>-<random>`).
- **Personal Dashboard:** View and monitor previously submitted complaints.

### Admin Features
- **Complaint Management:** View, audit, update status, or delete reported issues.
- **Lifecycle Management:** Update issue state (`submitted` → `pending` → `dispatched` → `in-progress` → `resolved` / `rejected`).
- **Analytics & Metrics:** Dynamic system statistics counter on complaints.

---

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla ES6+), Leaflet JS / OpenStreetMap
- **Backend:** Python 3, Django 5+, Django REST/JSON Views
- **Database:** SQLite 3 (Development & Demonstration)
- **Authentication:** Django Session Authentication with HTTP-only cookies

---

## Project Structure

```text
SamadhanSetu/
├── assets/                  # Public visual assets (logos, background images)
├── backend/
│   ├── manage.py            # Django CLI management script
│   ├── db.sqlite3           # Local SQLite database (ignored in version control)
│   ├── media/               # Media upload storage directory
│   ├── backend/             # Django core settings and main routing
│   │   ├── settings.py      # Production-hardened environment configurations
│   │   ├── urls.py          # Root URL router & static file server
│   │   └── wsgi.py          # WSGI server entry point
│   ├── auth_api/            # Authentication app (signup, login, logout, me)
│   └── issues/              # Issue lifecycle app (models, REST views, logic)
├── index.html               # Main Single-Page Application (SPA) HTML layout
├── styles.css               # Application custom stylesheet
├── script.js                # Frontend logic, state management, Leaflet map integration
├── .env.example             # Template for production environment variables
├── .gitignore               # Git security exclusion rules
└── README.md                # Project documentation
```

---

## Local Setup & Installation

### 1. Prerequisites
- Python 3.10+
- `pip` package manager

### 2. Clone Repository
```bash
git clone https://github.com/Codec-boy/Samadhan-Setu.git
cd Samadhan-Setu
```

### 3. Setup Virtual Environment
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
```

### 4. Install Dependencies
```bash
pip install django django-cors-headers Pillow
```

### 5. Environment Configuration
Copy the `.env.example` file to create a local `.env` file (optional for local dev):
```bash
cp .env.example .env
```

Available environment variables:
- `DJANGO_SECRET_KEY`: Custom secret key string.
- `DJANGO_DEBUG`: Set to `True` for development, `False` for production.
- `DJANGO_ALLOWED_HOSTS`: Comma-separated allowed hostnames.
- `DJANGO_CSRF_TRUSTED_ORIGINS`: Trusted origins for CSRF validation.
- `DJANGO_SECURE_COOKIES`: Set to `True` when running behind HTTPS.

### 6. Run Database Migrations
```bash
cd backend
python manage.py migrate
```

### 7. Create Superuser (Admin)
```bash
python manage.py createsuperuser
```

### 8. Start Development Server
```bash
python manage.py runserver 8000
```
Access the application at `http://127.0.0.1:8000/`.

---

## API Overview

### Authentication (`/api/auth/`)
- `POST /api/auth/signup/` — Citizen registration
- `POST /api/auth/login/` — User authentication
- `POST /api/auth/logout/` — End user session
- `GET /api/auth/me/` — Get active session user info

### Issues (`/api/issues/`)
- `POST /api/issues/submit/` — Submit new complaint (Authenticated)
- `GET /api/issues/my-issues/` — List citizen's complaints (Authenticated)
- `GET /api/issues/track/<issue_id>/` — Public tracking lookup (Sanitized)
- `GET /api/issues/all/` — Get all complaints (Admin Only)
- `GET /api/issues/stats/` — System analytics counter
- `PATCH /api/issues/<issue_id>/status/` — Update complaint state (Admin Only)
- `DELETE /api/issues/<issue_id>/delete/` — Delete complaint (Admin Only)

---

## Security & Production Hardening

- **Role Privilege Isolation (RBAC):** Signup strictly sets `is_staff=False`. Admin endpoints enforce staff authorization.
- **Data Protection:** Public tracking hides submitter identity details.
- **Session Security:** `HTTPOnly` and `SameSite=Lax` cookie configurations enabled.

> **Production Warning:** Before deploying to production, set `DJANGO_DEBUG=False`, configure `DJANGO_SECURE_COOKIES=True` with HTTPS, and provide a strong `DJANGO_SECRET_KEY`.