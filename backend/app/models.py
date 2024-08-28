from django.db import models

class User(models.Model):
  name = models.CharField(max_length=150)
  username = models.CharField(max_length=150, unique=True)
  email = models.EmailField(unique=True)
  password = models.CharField(max_length=128)
  profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
  bio_content = models.TextField(blank=True)

  def __str__(self):
    return self.username

class Post(models.Model):
  text_content = models.TextField(blank=False)
  created_at = models.DateTimeField(auto_now_add=True)
  update_at = models.DateTimeField(auto_now=True)
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  picture_content = models.ImageField(upload_to='picture_content/', blank=True, null=True)

  def __str__(self):
    created_at_str = self.created_at.strftime('%Y-%m-%d %H:%M:%S')

    photo_info = f'Foto: {self.picture_content.url}' if self.picture_content else 'Sem foto'

    return (f'Post by {self.author.username} - {created_at_str}: {self.text_content} ({photo_info})')

class Comment(models.Model):
  content = models.TextField(blank=False)
  created_at = models.DateTimeField(auto_now_add=True)
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  post = models.ForeignKey(Post, on_delete=models.CASCADE)

  def __str__(self):
    created_at_str = self.created_at.strftime('%Y-%m-%d %H:%M:%S')

    return (f'Comment by {self.author.username} - {created_at_str}: {self.content}')
