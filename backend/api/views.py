from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import ProjectSerializer
from .models import Project

def Home(request):
    return HttpResponse("Wellcome Home")

class ProjectCreateView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetailView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDeleteView(generics.DestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
