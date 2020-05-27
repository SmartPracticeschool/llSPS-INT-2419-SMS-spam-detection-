from django.urls import path
from .views import api_sms_spam_pred

urlpatterns = [
    path('api/predict/', api_sms_spam_pred, name='api_sms_spam_pred'),
]