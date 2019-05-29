from django.urls import path
from django.urls.conf import include
from dashboard.views import DashboardView

urlpatterns = [
    path('', DashboardView.as_view())
]
