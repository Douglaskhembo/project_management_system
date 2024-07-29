from django.urls import path
from .import views
urlpatterns = [
    path('', Home),
    path('project/create/',views.ProjectCreateView, name='createProject' ),
    path('projects/', views.ProjectListView, name='listProjects'),
    path('project/update/<int:pk>', views.ProjectDetailView, name='updateProject'),
    path('project/delete/<int:pk>', views.ProjectDeleteView, name='deleteProject'),
    path('project/detail/<int:pk>', views.ProjectDetailView, name='detailProject'),
]