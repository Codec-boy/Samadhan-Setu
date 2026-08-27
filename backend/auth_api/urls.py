from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name='auth_signup'),
    path('login/', views.user_login, name='auth_login'),
    path('logout/', views.user_logout, name='auth_logout'),
    path('me/', views.current_user, name='auth_me'),
]
