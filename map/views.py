from django.shortcuts import render, get_object_or_404
from .models import Post
from django.contrib.auth.models import User
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
# Create your views here.
def home(request):
    return render(request, 'map/home.html', {'title':'Home'})

def blog(request):
    context = {
        'posts': Post.objects.all()
    }
    return render(request, 'map/blog.html',  context, {'title':'Blog'})


def about(request):
    return render(request, 'map/about.html', {'title':'About'})



class PostListView(ListView):
    model = Post
    template_name = 'map/blog.html'  # <app>/<model>_<viewtype>.html
    context_object_name = 'posts'
    ordering = ['date_posted']
    paginate_by = 5

class UserPostListView(ListView):
    model = Post
    template_name = 'map/user_posts.html'  # <app>/<model>_<viewtype>.html
    context_object_name = 'posts'
    paginate_by = 5

    def get_queryset(self):
        user = get_object_or_404(User, username=self.kwargs.get('username'))
        return Post.objects.filter(author=user).order_by('-date_posted')


class PostDetailView(DetailView):
    model = Post

class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    fields = ['title', 'content']

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)


class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    fields = ['title', 'content']

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False


class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    success_url = '/map'
    def test_func(self):
        post = self.get_object()
        if self.request.user == post.author:
            return True
        return False






# import json
# from map.models import Post
# with open('posts.json') as f:
#     posts_json = json.load(f)
#
# for post in posts_json:
#     post = Post(title=post['title'], content=post['content'], author_id=post['user_id'])
#     post.save()

