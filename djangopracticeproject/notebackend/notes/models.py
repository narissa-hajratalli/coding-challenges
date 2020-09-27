from django.db import models
from django.contrib.auth.models import User



# imports user auth, user can have many notes (one to many relationship)

# Create your models here.

class Note(models.Model):
    message = models.CharField(max_length=140)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)

    # brings in user relationship to the notes model

    class Meta:
        verbose_name_plural = 'notes'

    def __str__(self):
        return self.message
