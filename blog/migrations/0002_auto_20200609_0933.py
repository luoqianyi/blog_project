# Generated by Django 2.1.1 on 2020-06-09 01:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(max_length=200, upload_to='article_image')),
            ],
            options={
                'verbose_name': '文章图片',
                'verbose_name_plural': '文章图片',
                'ordering': ['-id'],
            },
        ),
        migrations.RemoveField(
            model_name='comment',
            name='article',
        ),
        migrations.RemoveField(
            model_name='comment',
            name='pid',
        ),
        migrations.RemoveField(
            model_name='comment',
            name='user',
        ),
        migrations.AlterModelOptions(
            name='catagory',
            options={'ordering': ['-index', 'id'], 'verbose_name': '分类', 'verbose_name_plural': '分类'},
        ),
        migrations.DeleteModel(
            name='Comment',
        ),
        migrations.AddField(
            model_name='article',
            name='image',
            field=models.ManyToManyField(to='blog.Image', verbose_name='图片'),
        ),
    ]