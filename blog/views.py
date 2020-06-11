from django.shortcuts import render,redirect
from django.contrib.auth.hashers import make_password
import logging
from django.conf import settings
from django.contrib.auth import logout,authenticate,login
from django.core.paginator import EmptyPage,Paginator,InvalidPage,PageNotAnInteger
from blog.models import *
from django.http import HttpResponseRedirect,Http404
from django.urls import reverse
from blog.forms import *
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
user=get_user_model()
# from django.contrib.auth.forms import UserCreationForm

# Create your views here.
logger=logging.getLogger('blog.views')
def global_setting(request):
    # 分类信息获取（导航数据）
    catagory_list = Catagory.objects.all()[1:4]
    # 广告数据

    #根据点击次数进行排行

    return {'catagory_list':catagory_list,
            "SITE_NAME":settings.SITE_NAME,
            'SITE_DESC':settings.SITE_DESC,
            'SELF_QQ':settings.SELF_QQ,
            'SELF_EMAIL':settings.SELF_EMAIL}
def index(request):
    try:
        # file=open("sss.txt",'r')
        # site_name=settings.SITE_NAME
        #最新文章数据
        article_lists_all=Article.objects.all()
        article_list=article_lists_all[:11]
        #分页代码
        paginator=Paginator(article_list,6)
        try:
            page=int(request.GET.get('page',1))
            article_list=paginator.page(page)
        except (EmptyPage,InvalidPage,PageNotAnInteger):
            article_list=paginator.page(1)
    except Exception as e:
           logger.error(e)
    return render(request, 'index.html',locals())
#文章详情
@login_required
def article_detail(request,id):
    # if article_detail.owner!=request.user:
    #     raise Http404
    #取出相应文章
    article=Article.objects.get(id=id)
    #需要传递给模版的对象
    context={'articles':article}
    #载入模版，并返回context对象
    return render(request,'detail.html',context)

#注销用户
def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))
# #注册新用户
# def reg(request):
#     try:
#         if request.method=='POST':
#             reg_form=RegForm(request.POST)
#             if reg_form.is_valid():
#                 #注册
#                 user=User.objects.create(username=reg_form.clean_data["username"],
#                                          email=reg_form.clean_data['email'],
#                                          password=make_password(reg_form.clean_data["password"]),)
#                 user.save()
#                 #登录
#                 user.backend='django.contrib.auth.backends.ModelBackend'#指定的默认登录验证方式
#                 login(request,user)
#                 return HttpResponseRedirect(reverse('index'))
#             else:
#                 return render(request,'failure.html',{"reason":reg_form.errors})
#         else:
#             reg_form=RegForm()
#     except Exception as e:
#         logger.error(e)
#     return render(request,"reg.html",locals())
def reg(request):
    if request.method=='POST':
        username=request.POST.get("username",None)
        password=request.POST.get("password",None)
        user=User.objects.create(username=username,password=make_password(password))
        login(request,user)
        return HttpResponseRedirect(reverse('index'))
    return render(request,"reg.html")

def failure(request):
    return render(request,"failure.html")
def about(request):
    return render(request,"about.html")