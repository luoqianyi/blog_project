from django.contrib import admin
# from django.contrib.auth import get_user_model
from blog.models import *
from .models import User
# Register your models here.
class ArticleAdmin(admin.ModelAdmin):
    '''自定义admin文章编辑行'''
    # fields= ('title','desc','content',)
    '''自定义admin文章编辑区域划分'''
    # fieldsets =(
    #     ('普通设置',{
    #         'fields':('title','desc','content')
    #     }),
    #     ('高级设置',{
    #         'classes':('collapse'),
    #         'fields':('click_count','is_recommend')
    #     }),
    # )
    '''自定义显示配置内容'''
    list_display = ('title','desc','click_count','data_publish')
    '''自定义显示配置内容的可编辑性'''
    list_editable = ('click_count',)

    class Media:
        js=(
            '/static/js/kindeditor/kindeditor-all-min.js',
            '/static/js/kindeditor/lang/zh-CN.js',
            '/static/js/kindeditor/config.js',
        )
admin.site.register(User)
admin.site.register(Tag)
admin.site.register(Catagory)
admin.site.register(Article,ArticleAdmin)
# admin.site.register(Comment)
admin.site.register(Image)
