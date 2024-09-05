from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(username, email, password, **extra_fields)
class User(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=150)
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    bio_content = models.TextField(blank=True)
    last_login = models.DateTimeField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()

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
