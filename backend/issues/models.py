from django.db import models
from django.contrib.auth import get_user_model
from django.utils.crypto import get_random_string
import time

User = get_user_model()


class Issue(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    issue_id = models.CharField(max_length=50, unique=True, blank=True)
    citizen_name = models.CharField(max_length=150, blank=True, default="")
    citizen_phone = models.CharField(max_length=20, blank=True, default="")  # NOT unique!
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=100, default="other")
    location = models.CharField(max_length=200, blank=True)
    lat = models.FloatField(null=True, blank=True)
    lng = models.FloatField(null=True, blank=True)
    status = models.CharField(max_length=50, default="submitted")
    priority = models.CharField(max_length=50, default="minor")
    issue_type = models.CharField(max_length=20, default="public")  # 'public' or 'private'
    image = models.ImageField(upload_to="issues/", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.issue_id:
            # Generate ID like CP-1234567890-ABCDEF
            self.issue_id = f"CP-{int(time.time()*1000)}-{get_random_string(6).upper()}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.issue_id} - {self.title}"


class IssueImage(models.Model):
    """Support up to 5 evidence images per complaint, saved to media/issues/."""
    issue = models.ForeignKey(Issue, related_name="images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="issues/")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image for {self.issue.issue_id}"


class Review(models.Model):
    """Community Reviews stored in SQLite through Django ORM."""
    author_name = models.CharField(max_length=150)
    rating = models.IntegerField(default=5)  # 1 to 5 stars
    review_text = models.TextField()
    is_approved = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author_name} ({self.rating} stars)"


class Worker(models.Model):
    """Private Workers directory stored in SQLite through Django ORM."""
    name = models.CharField(max_length=150)
    job_role = models.CharField(max_length=100)  # e.g., electrician, plumber, etc.
    phone = models.CharField(max_length=20)
    email = models.EmailField(blank=True, default="")
    experience = models.IntegerField(default=0)  # years
    address = models.TextField(blank=True, default="")
    rating = models.FloatField(default=5.0)
    completed_jobs = models.IntegerField(default=0)
    status = models.CharField(max_length=50, default="available")  # 'available' or 'busy'
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.job_role}"