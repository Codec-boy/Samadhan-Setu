from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("SamadhanSetu Backend Running")

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/issues/', include('issues.urls')),
]