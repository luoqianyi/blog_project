# -- coding: utf-8 --
from django import forms
class RegForm(forms.Form):
    '''注册表单'''
    username=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Username","required":"required",}),
                             max_length=50,error_messages={"required":"用户名不能为空",})
    email=forms.EmailField(widget=forms.TextInput(attrs={"placeholder":"Email","required":"required",}),
                           max_length=50,error_messages={"required":"email不能为空",})
    password=forms.CharField(widget=forms.PasswordInput(attrs={"placeholder":"Password","required":"required"}),
                             max_length=20,error_messages={"required":"密码不能为空",})