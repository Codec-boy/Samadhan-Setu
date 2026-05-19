from django.db import models
from django.contrib.auth import get_user_model
import time
from django.utils.crypto import get_random_string

User = get_user_model()

class Issue(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    issue_id = models.CharField(max_length=50, unique=True, blank=True)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=100, default="other")
    location = models.CharField(max_length=200, blank=True)
    lat = models.FloatField(null=True, blank=True)
    lng = models.FloatField(null=True, blank=True)
    status = models.CharField(max_length=50, default="submitted")
    priority = models.CharField(max_length=50, default="minor")
    image = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.issue_id:
            # Generate ID like CP-1234567890-ABCDEF
            self.issue_id = f"CP-{int(time.time()*1000)}-{get_random_string(6).upper()}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.issue_id} - {self.title}"