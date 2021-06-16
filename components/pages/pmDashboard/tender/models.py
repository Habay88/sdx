from django.db import models
from api.industry.models import Industry
from api.product.models import Product

# Create your models here.
class Tender(models.Model):
    STATUS = (
        ('0', 'Open'),
        ('1', 'Active'),
        ('2', 'Completed'),
        ('3', 'Cancelled'),
        ('4', 'Visible')
    )
    tenderRef = models.CharField(max_length=300, null = True)
    tenderTitle = models.CharField(max_length = 300, null = True)
    tenderDescription = models.TextField(max_length= 1000)
    market = models.ForeignKey(Industry, on_delete=models.CASCADE)
    openDate = models.DateTimeField(auto_now_add=False, null = True, auto_now=False)
    closeDate = models.DateTimeField(auto_now_add=False, null = True,auto_now=False)
    status = models.CharField(max_length=100, choices = STATUS, null = True, default= 2)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    document = models.FileField(upload_to='media', null=True)
    documentDescription = models.TextField(max_length=1000)
    documentName = models.CharField(max_length=100, null = True)
