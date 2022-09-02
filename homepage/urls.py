from django.urls import path

from . import views

app_name = "homepage"

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('aboutus/', views.about, name='about'),
    path('competitions/', views.competitions, name='competitions'),
    path('booklets/', views.booklets, name='booklets'),
    path('timeline/<str:competition>/', views.timeline, name='timeline'),
    path('gallery/', views.gallery, name='gallery'),\
    path('pagenotavailable/', views.pagenotavailable, name='pagenotavailable'),
]
