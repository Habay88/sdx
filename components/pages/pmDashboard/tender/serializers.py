from .models import Tender
from rest_framework import serializers


class TenderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tender
        fields = '__all__'