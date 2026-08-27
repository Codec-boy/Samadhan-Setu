import json
import base64
import io
from PIL import Image
from django.test import TestCase, Client
from django.contrib.auth import get_user_model
from issues.models import Issue, IssueImage, Review, Worker

User = get_user_model()


def generate_test_base64_image(format='PNG', size=(50, 50), color='blue'):
    """Generate a valid base64 image data URL string for testing."""
    img = Image.new('RGB', size, color=color)
    buf = io.BytesIO()
    img.save(buf, format=format)
    raw_bytes = buf.getvalue()
    b64_str = base64.b64encode(raw_bytes).decode('utf-8')
    return f"data:image/{format.lower()};base64,{b64_str}"


class SamadhanSetuSystemTests(TestCase):

    def setUp(self):
        self.client = Client()

        # Admin user
        self.admin_user = User.objects.create_superuser(
            username='adminuser',
            email='admin@example.com',
            password='AdminPassword123'
        )

        # Standard non-staff user
        self.citizen_user = User.objects.create_user(
            username='citizenuser',
            email='citizen@example.com',
            password='CitizenPassword123'
        )

    # ---------------------------------------------------------------------------
    # 1. Admin Authentication & RBAC Tests
    # ---------------------------------------------------------------------------
    def test_admin_login_success(self):
        res = self.client.post('/api/auth/login/', json.dumps({
            'username': 'adminuser',
            'password': 'AdminPassword123'
        }), content_type='application/json')

        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertTrue(data.get('success'))
        self.assertTrue(data['user']['is_admin'])

    def test_non_staff_admin_login_rejected(self):
        res = self.client.post('/api/auth/login/', json.dumps({
            'username': 'citizenuser',
            'password': 'CitizenPassword123'
        }), content_type='application/json')

        self.assertEqual(res.status_code, 403)

    def test_admin_endpoints_protection(self):
        # Unauthenticated access returns 401
        res = self.client.get('/api/issues/all/')
        self.assertEqual(res.status_code, 401)

        # Log in as non-staff returns 403
        self.client.force_login(self.citizen_user)
        res = self.client.get('/api/issues/all/')
        self.assertEqual(res.status_code, 403)

        # Log in as admin succeeds (200)
        self.client.force_login(self.admin_user)
        res = self.client.get('/api/issues/all/')
        self.assertEqual(res.status_code, 200)

    # ---------------------------------------------------------------------------
    # 2. Frictionless Citizen Complaint Flow (No Login)
    # ---------------------------------------------------------------------------
    def test_submit_complaint_no_login_required(self):
        img_b64 = generate_test_base64_image()
        payload = {
            'name': 'Rahul Sharma',
            'phone': '9876543210',
            'title': 'Pothole on Main Street',
            'description': 'Large pothole causing traffic slowdown.',
            'category': 'infrastructure',
            'location': 'Main Street, Ward 5',
            'images': [img_b64]
        }

        res = self.client.post('/api/issues/submit/', json.dumps(payload), content_type='application/json')
        self.assertEqual(res.status_code, 201)
        data = res.json()
        self.assertIn('issueId', data)
        self.assertTrue(data['issueId'].startswith('CP-'))

        # Verify DB storage
        issue = Issue.objects.get(issue_id=data['issueId'])
        self.assertEqual(issue.citizen_name, 'Rahul Sharma')
        self.assertEqual(issue.citizen_phone, '9876543210')

    def test_same_phone_multiple_complaints_allowed(self):
        phone = '9876543210'

        for i in range(3):
            payload = {
                'name': 'Rahul Sharma',
                'phone': phone,
                'title': f'Complaint Number {i+1}',
                'category': 'utilities'
            }
            res = self.client.post('/api/issues/submit/', json.dumps(payload), content_type='application/json')
            self.assertEqual(res.status_code, 201)

        self.assertEqual(Issue.objects.filter(citizen_phone=phone).count(), 3)

    # ---------------------------------------------------------------------------
    # 3. Image Upload Limit & Validation Tests
    # ---------------------------------------------------------------------------
    def test_max_five_images_allowed(self):
        images = [generate_test_base64_image() for _ in range(5)]
        payload = {
            'name': 'Amit',
            'phone': '9123456789',
            'title': 'Multi Image Complaint',
            'images': images
        }

        res = self.client.post('/api/issues/submit/', json.dumps(payload), content_type='application/json')
        self.assertEqual(res.status_code, 201)
        data = res.json()
        issue = Issue.objects.get(issue_id=data['issueId'])
        self.assertEqual(issue.images.count(), 5)

    def test_sixth_image_rejected(self):
        images = [generate_test_base64_image() for _ in range(6)]
        payload = {
            'name': 'Amit',
            'phone': '9123456789',
            'title': 'Excessive Image Complaint',
            'images': images
        }

        res = self.client.post('/api/issues/submit/', json.dumps(payload), content_type='application/json')
        self.assertEqual(res.status_code, 400)
        self.assertIn('maximum of 5 images', res.json()['error'])

    def test_corrupted_image_rejected(self):
        payload = {
            'name': 'Amit',
            'phone': '9123456789',
            'title': 'Corrupted Image Test',
            'images': ['data:image/png;base64,invalid_base64_junk!!!']
        }
        res = self.client.post('/api/issues/submit/', json.dumps(payload), content_type='application/json')
        self.assertEqual(res.status_code, 400)

    # ---------------------------------------------------------------------------
    # 4. Public Complaint Tracking & Privacy Tests
    # ---------------------------------------------------------------------------
    def test_public_tracking_privacy(self):
        issue = Issue.objects.create(
            title='Water Leakage',
            citizen_name='Secret Citizen',
            citizen_phone='9998887770',
            location='Central Park'
        )

        res = self.client.get(f'/api/issues/track/{issue.issue_id}/')
        self.assertEqual(res.status_code, 200)
        data = res.json()['issue']

        # Ensure phone number and private citizen name are NOT exposed publicly
        self.assertNotIn('citizenPhone', data)
        self.assertNotIn('citizen_phone', data)
        self.assertNotIn('citizenName', data)
        self.assertEqual(data['title'], 'Water Leakage')

    # ---------------------------------------------------------------------------
    # 5. Path Traversal Defense Tests
    # ---------------------------------------------------------------------------
    def test_path_traversal_blocked(self):
        traversal_attempts = [
            '../.env',
            '../../db.sqlite3',
            '../backend/settings.py',
            '..%2f.env'
        ]
        for path in traversal_attempts:
            res = self.client.get(f'/{path}')
            self.assertEqual(res.status_code, 404, f"Path traversal failed for {path}")

    # ---------------------------------------------------------------------------
    # 6. Reviews & Private Workers Database Persistence Tests
    # ---------------------------------------------------------------------------
    def test_review_persistence(self):
        res = self.client.post('/api/issues/reviews/', json.dumps({
            'name': 'Priya',
            'rating': 5,
            'text': 'Great resolution time!'
        }), content_type='application/json')
        self.assertEqual(res.status_code, 201)

        res = self.client.get('/api/issues/reviews/')
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertTrue(any(r['authorName'] == 'Priya' for r in data))

    def test_worker_persistence(self):
        res = self.client.post('/api/issues/workers/', json.dumps({
            'name': 'Sunil Electrician',
            'phone': '9876500000',
            'jobRole': 'electrician',
            'experience': 5
        }), content_type='application/json')
        self.assertEqual(res.status_code, 201)

        res = self.client.get('/api/issues/workers/?role=electrician')
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertTrue(any(w['name'] == 'Sunil Electrician' for w in data))
