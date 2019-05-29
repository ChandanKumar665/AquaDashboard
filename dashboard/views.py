from django.shortcuts import render
from rest_framework.views import APIView
from django.http.response import JsonResponse
import requests
import json
# Create your views here.

class DashboardView(APIView):
    
    def get(self, req):
        res = requests.get('http://api.ipstack.com/check?access_key=303708121b4f092a3bd9916450f77648')
        result = json.loads(res.content)
        ip = result['ip']
        city = result['city']
        state = result['region_name']
        country = result['country_code']
        
        API_KEY = 'cce54bd2f32dfbea3a608858a2cd7995'
        weather = requests.get('http://api.openweathermap.org/data/2.5/weather?q={}&lang=en&units=metric&APPID={}'.format(city,API_KEY))
        w_data = json.loads(weather.content)
        
        rval = {'data':[{"city":city,"state":state,"ip":ip,"country":country},w_data], 'success':True, 'message':"No dashboard data available"}
        return JsonResponse(rval)
    
    
#          for future use
#     def post(self, req):
#         if req.method == 'POST':
#             rval = {'data':1, 'success':True, 'message':"order created successfully"}
#             return JsonResponse(rval)

#     def put(self, req):
#         print(req.GET.get('id'))
#         if req.method == 'PUT':
#             rval = {'data':1, 'success':True, 'message':"order updated successfully"}
#             return JsonResponse(rval)
#     
#     def delete(self, req):
#         print(req.GET.get('id'))
#         if req.method == 'DELETE':
#             rval = {'data':1, 'success':True, 'message':"order deleted successfully"}
#             return JsonResponse(rval)