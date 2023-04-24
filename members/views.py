from django.http import HttpResponse,JsonResponse
from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib import auth
from .models import  members
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def home(request):
    return render(request,'home.html',{})
def success(request):
    return render(request,'success.html',{})
def fail(request):
    return render(request,"fail.html",{})
def land(request):
    return render(request,"land.html",{})
    
def create_object(request):
    if request.method == 'POST':
        name=request.POST.get('name')
        score=request.POST.get('score')
        email=request.POST.get('email')
        password=request.POST.get('password')
        mem=members(name=name,score=score,email=email,password=password)
        mem.save()
        return JsonResponse({'message':'Object created successfully'})
    else:
            return JsonResponse({'error':'Invalid request method'})
    
def register(request):    
    if request.method =='POST':
        #print(request+"++++++++++++")
        email=request.POST['email']
        username=request.POST['username']
        password=request.POST['password']
        print(email,username,password)
        user=User.objects.create_user(email=email,username=username,password=password)
        user.save()
        return redirect('http://127.0.0.1:8000/home')
    
    else:
        print(request)
        return render(request,'register.html')
        
    
def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password=request.POST['password']
        user = auth.authenticate(request,username=username,password=password)
        if user  is not None:
            auth.login(request,user)
            return redirect('http://127.0.0.1:8000/home')
        else:
            return render(request,'login.html',{})
    else:
        return render(request,'login.html',{})
