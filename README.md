SamadhanSetu – Civic Issue Reporting Platform
Overview

SamadhanSetu is a web-based platform that allows citizens to report civic issues such as infrastructure problems, safety concerns, environmental hazards, and utility failures. The system allows users to submit complaints with descriptions, images, and location data while enabling authorities to track and manage these issues.

The backend is built using Django and stores data using SQLite.

Features
Citizen Features

Submit civic issues

Voice-based issue description

Upload images of issues

Map-based location selection

Automatic Issue ID generation

Track issue status

Admin Features

View all submitted issues

Change issue status (Pending → Resolved)

Manage complaints through the admin panel

Tech Stack
Frontend

HTML5

CSS3

JavaScript

Map Integration (Leaflet / OpenStreetMap)

Backend

Python

Django

Database

SQLite

Development Tools

Visual Studio Code

Git

GitHub

Project Structure
SamadhanSetu/
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│
├── backend/
│   ├── manage.py
│   ├── backend/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │
│   ├── issues/
│       ├── models.py
│       ├── views.py
│       ├── urls.py
│       ├── admin.py
│
└── README.md
Installation Guide
1 Install Python

Install Python from

https://python.org
2 Clone the Repository
git clone https://github.com/yourusername/samadhansetu.git
cd samadhansetu
3 Create Virtual Environment
python -m venv venv

Activate environment

Windows:

venv\Scripts\activate
4 Install Dependencies
pip install django
5 Run Database Migrations
python manage.py migrate
6 Create Admin User
python manage.py createsuperuser

Enter

username
email
password
7 Run Server
python manage.py runserver

Backend will run at

http://127.0.0.1:8000
API Endpoints
Submit Issue
POST /api/issues/submit/

Example request:

{
"title": "Broken Road",
"description": "Large pothole near main road",
"location": "Vadodara"
}

Response:

{
"message": "Issue submitted successfully",
"id": 12
}
Database Model Example

Example Issue Model:

class Issue(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
Admin Panel

Access admin panel:

http://127.0.0.1:8000/admin

Admin can:

View submitted issues

Update issue status

Manage complaints

Future Improvements

Real-time issue tracking

Email notifications

Mobile app integration

Government department dashboard

AI-based issue categorization

Contributors

Himanshu – Developer

License

This project is created for educational purposes.

Screenshots (Optional)

You can add screenshots like:

Homepage

Issue submission page

Map integration

Admin dashboard

Example:

![Homepage](screenshots/homepage.png)
Acknowledgements

Thanks to the open-source community and frameworks that made this project possible.