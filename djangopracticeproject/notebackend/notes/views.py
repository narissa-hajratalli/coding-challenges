from .models import Note
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import NoteSerializer, UserSerializer, GroupSerializer
from rest_framework_simplejwt import authentication # <=add this


class NoteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Note.objects.all()
    # object manager built into any model in django, allows you to do CRUD
    # this queries the db and get all the data

    serializer_class = NoteSerializer
    # passes the data to the serializer so it can be returend as json

    permission_classes = [permissions.AllowAny] #Could be [permissions.IsAuthenticated]
    # allow anyone to do anything on your app
    # we want anyone to create a user but we'd need to be more specific so that only when you're logged in
    # you are able to do CRUD operations

    authentication_classes = (authentication.JWTAuthentication,)# <= add this
    # can't access notes unless authenticated

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]
