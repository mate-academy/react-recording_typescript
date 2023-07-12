import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import { NewPostPage } from './pages/NewPostPage';
import { PostDetailsPage } from './pages/PostDetailsPage';
import { PostsPage } from './pages/PostsPage';
import { UsersPage } from './pages/UsersPage';
import { HomePage } from './pages/HomePage';

export const App: React.FC = () => {
  return <>
    <nav className="navbar is-light px-3">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src="/logo.svg" alt="MA" className="logo" />
        </Link>

        <Link to="/" className="navbar-item is-active">
          Home
        </Link>

        <Link to="/users" className="navbar-item">
          Users
        </Link>

        <Link to="/posts" className="navbar-item">
          Posts
        </Link>
      </div>
    </nav>

    <div className="section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/620" element={<PostDetailsPage />} />
        <Route path="/posts/new" element={<NewPostPage />} />
      </Routes>
    </div>
  </>;
}
