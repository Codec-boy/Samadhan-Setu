from django.urls import path
from . import views

urlpatterns = [
    path('submit/', views.submit_issue, name='submit_issue'),
    path('all/', views.get_all_issues, name='get_all_issues'),
    path('track/<str:issue_id>/', views.track_issue, name='track_issue'),
    path('stats/', views.get_issue_stats, name='get_issue_stats'),
    path('<str:issue_id>/delete/', views.delete_issue, name='delete_issue'),
    path('<str:issue_id>/status/', views.update_issue_status, name='update_issue_status'),
    path('reviews/', views.handle_reviews, name='handle_reviews'),
    path('workers/', views.handle_workers, name='handle_workers'),
]