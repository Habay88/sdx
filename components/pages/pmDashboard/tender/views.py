from django.shortcuts import render
from .models import Tender
from django.http import HttpResponse
from api.user.models import Supplier
from .serializers import TenderSerializer
from rest_framework import viewsets
from django.core import serializers
from django.db.models import Q
from rest_framework.decorators import action

# Create your views here.
class TenderViewSet(viewsets.ModelViewSet):
    queryset = Tender.objects.all()
    serializer_class = TenderSerializer

    @action(detail=False, methods=['GET'])
    def selectBidders(self,request):
        product = request.query_params.get('product')
        PM = request.query_params.get('id')
        registered = Supplier.objects.filter(products = product, procurementManager = PM)
        notRegistered = Supplier.objects.filter(products = product).exclude(procurementManager= PM)
        bidders = registered | notRegistered
        result = serializers.serialize('json', bidders)
        return HttpResponse(result, content_type='application/json')

    @action(detail=False, methods=['GET'])
    def getRegisteredBidders(self, request):
        product = request.query_params.get('product')
        PM = request.query_params.get('id')
        registered = Supplier.objects.filter(products=product).filter(procurementManager=PM)
        result = serializers.serialize('json', registered)
        return HttpResponse(result, content_type='application/json')


