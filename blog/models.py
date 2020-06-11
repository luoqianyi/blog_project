from django.db import models
#导入django自带的用户信息验证库
from django.contrib.auth.models import AbstractUser
# Create your models here.
# from ckeditor_uploader.fields import RichTextUploadingField
#用户模型(采用继承方式扩展用户信息)
class User(AbstractUser):
    avatar=models.ImageField(upload_to='avatar/%Y/%m',default='avatar/default.png',max_length=200)
    qq=models.CharField(max_length=20,blank=True,null=True,verbose_name="QQ号码")
    mobile=models.CharField(max_length=11,blank=True,null=True,unique=True,verbose_name="手机号码")
    class Meta:
        #在admin组里显示名字
        verbose_name='用户'
        verbose_name_plural=verbose_name
        ordering=['-id']
    def __str__(self):
        return self.username
#tag(标签)
class Tag(models.Model):
    name=models.CharField(max_length=30,verbose_name='标签名称')
    class Meta:
        verbose_name='标签'
        verbose_name_plural=verbose_name
    def __str__(self):
        return self.name
#创建分类
class Catagory(models.Model):
    name=models.CharField(max_length=30,verbose_name='分类名称')
    index=models.IntegerField(default=999,verbose_name="分类的排序")
    class Meta:
        verbose_name = '分类'
        verbose_name_plural = verbose_name
        ordering=['-index','id']
    def __str__(self):
        return self.name
#图片
class Image(models.Model):
    image=models.ImageField(upload_to="article_image",max_length=200)
    class Meta:
        # 在admin组里显示名字
        verbose_name = '文章图片'
        verbose_name_plural = verbose_name
        ordering = ['-id']
    def __str__(self):
        return self.image.name[14:]
#文章
class Article(models.Model):
    title=models.CharField(max_length=50,verbose_name="文章标题")
    desc=models.CharField(max_length=80,verbose_name='文章描述')
    content=models.TextField(verbose_name="文章内容")
    click_count=models.IntegerField(default=0,verbose_name="点击次数")
    is_recommend=models.BooleanField(default=False,verbose_name="是否推荐")
    data_publish=models.DateTimeField(auto_now_add=True,verbose_name="发布时间")
    user=models.ForeignKey(User,verbose_name="用户",on_delete=models.CASCADE)
    category=models.ForeignKey(Catagory,blank=True,null=True,verbose_name="分类",on_delete=models.CASCADE)
    tag=models.ManyToManyField(Tag,verbose_name="标签")
    image=models.ManyToManyField(Image,verbose_name="图片")
    class Meta:
        verbose_name="文章"
        verbose_name_plural=verbose_name
        ordering=['-data_publish']
    def __str__(self):
        return self.title
# #评论模型
# class Comment(models.Model):
#     content=models.TextField(verbose_name="评论内容")
#     data_publish=models.DateTimeField(auto_now_add=True,verbose_name="发布时间")
#     user=models.ForeignKey(User,blank=True,null=True,verbose_name="用户",on_delete=models.CASCADE)
#     article=models.ForeignKey(Article,blank=True,null=True,verbose_name="文章",on_delete=models.CASCADE)
#     pid=models.ForeignKey('self',blank=True,null=True,verbose_name="父级评论",on_delete=models.CASCADE)
#     class Meta:
#         verbose_name="评论"
#         verbose_name_plural=verbose_name
#         ordering=['-data_publish']
#     def __str__(self):
#         return str(self.id)

