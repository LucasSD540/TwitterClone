from rest_framework import serializers
from .models import User, Post, Comment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'username', 'email', 'profile_picture', 'bio_content']

class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)  # Para incluir os dados do autor no Post

    class Meta:
        model = Post
        fields = ['id', 'text_content', 'created_at', 'update_at', 'author', 'picture_content']

class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    post = PostSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'content', 'created_at', 'author', 'post']
