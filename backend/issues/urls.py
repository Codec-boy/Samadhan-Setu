from django.urls import path
from . import views

urlpatterns = [
    path('submit/', views.submit_issue, name='submit_issue'),
    path('all/', views.get_all_issues, name='get_all_issues'),
    path('my-issues/', views.get_user_issues, name='get_user_issues'),
    path('<str:issue_id>/delete/', views.delete_issue, name='delete_issue'),
]