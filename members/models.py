from django.db import models

# Create your models here.
class members(models.Model):
    name=models.CharField(max_length=120,default='Some name')
    score=models.DecimalField(decimal_places=2,max_digits=1000)
    email=models.CharField(max_length=120,default='Some email')
    password=models.CharField(max_length=120,default='Some name')
