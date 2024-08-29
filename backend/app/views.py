from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import User, Post, Comment
from .serializers import UserSerializer, PostSerializer, CommentSerializer

# Para listar ou criar usuários
class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Para listar ou criar posts
class PostListCreateView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

# Para obter detalhes de um post específico ou atualizá-lo
class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# Para listar ou criar comentários
class CommentListCreateView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
