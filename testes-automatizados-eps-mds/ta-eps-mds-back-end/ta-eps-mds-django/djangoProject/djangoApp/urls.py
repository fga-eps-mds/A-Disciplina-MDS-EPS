from django.urls import path
from . import views

urlpatterns = [
    path ('create', views.addUser),
    path('find-all-paged', views.findAllPaged),
    path ('update/<str:pk>', views.updateUser),
    path ('delete/<str:pk>', views.deleteUser),
]