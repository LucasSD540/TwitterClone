from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from app.views import CommentListCreateView, PostDetailView, PostListCreateView, UserDetailView, UserListCreateView, username_login

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/', include('app.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/username-login/', username_login, name='username-login'),
    path('api/user/', UserListCreateView.as_view(), name='user_list_create'),
    path('user/', UserDetailView.as_view(), name='user-detail'),
    path('posts/', PostListCreateView.as_view(), name='post_list_create'),
    path('posts/<int:pk>/', PostDetailView.as_view(), name='post_detail'),
    path('comments/', CommentListCreateView.as_view(), name='comment_list_create'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
