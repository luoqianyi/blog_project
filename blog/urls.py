# -- coding: utf-8 --
from blog.views import index,article_detail
from django.conf.urls import url
from django.contrib.auth.views import LoginView
from . import views
urlpatterns=[
    url(r'^$',index,name='index'),
    url(r'^article_detail/(?P<id>[0-9]+)/$',article_detail,name="article_detail"),
    #登录界面
    url(r'^login/$',LoginView.as_view(template_name='login.html'),name='login'),
    #退出界面
    url(r'^logout/$',views.logout_view,name='logout'),
    #注册页面
    url(r'^reg/$',views.reg,name='reg'),
    #关于我页面
    url(r'^about',views.about,name='about'),
    #未完善页面
    url(r'^failure',views.failure,name='failure')
]