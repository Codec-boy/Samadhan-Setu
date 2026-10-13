#!/usr/bin/env bash
# Exit on error
set -o errexit

echo "==> Installing Python dependencies..."
pip install -r requirements.txt

echo "==> Collecting static files..."
python backend/manage.py collectstatic --no-input

echo "==> Running database migrations..."
python backend/manage.py migrate
