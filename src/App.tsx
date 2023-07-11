import React, { useState } from 'react';
import { NewPostPage } from './pages/NewPostPage';
import { PostDetailsPage } from './pages/PostDetailsPage';
import { PostsPage } from './pages/PostsPage';
import { UsersPage } from './pages/UsersPage';
import { HomePage } from './pages/HomePage';

type Page = 'home' | 'users' | 'posts' | 'postDetails' | 'newPost';

export const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  return <>
    <nav className="navbar is-light px-3">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <img src="/logo.svg" alt="MA" className="logo" />
        </a>

        <a href="#/" className="navbar-item is-active" onClick={() => setPage('home')}>
          Home
        </a>

        <a href="#/users" className="navbar-item" onClick={() => setPage('users')}>
          Users
        </a>

        <a href="#/posts" className="navbar-item" onClick={() => setPage('posts')}>
          Posts
        </a>
      </div>
    </nav>

    <div className="section">
      {page === 'home' && <HomePage />}
      {page === 'users' && <UsersPage />}
      {page === 'posts' && <PostsPage />}
      {page === 'postDetails' && <PostDetailsPage />}
      {page === 'newPost' && <NewPostPage />}
    </div>
  </>;
}
