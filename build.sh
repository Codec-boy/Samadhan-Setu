#!/usr/bin/env bash
# Exit on error
set -o errexit

echo "==> Installing Python dependencies..."
pip install -r requirements.txt

echo "==> Collecting static files..."
python backend/manage.py collectstatic --no-input

echo "==> Running database migrations..."
python backend/manage.py migrate

echo "==> Ensuring Admin user exists..."
python backend/manage.py shell -c "
import os
from django.contrib.auth import get_user_model
User = get_user_model()
username = os.environ.get('DJANGO_SUPERUSER_USERNAME', 'admin')
email = os.environ.get('DJANGO_SUPERUSER_EMAIL', 'admin@example.com')
password = os.environ.get('DJANGO_SUPERUSER_PASSWORD', 'Admin@12345')

user, created = User.objects.get_or_create(
    username=username,
    defaults={'email': email, 'is_staff': True, 'is_superuser': True}
)
user.set_password(password)
user.is_staff = True
user.is_superuser = True
user.save()
if created:
    print(f'==> Created admin account \"{username}\"')
else:
    print(f'==> Updated admin account \"{username}\"')
"
