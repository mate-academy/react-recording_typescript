/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { PostList } from '../components/PostList';
import { Loader } from '../components/Loader';
import { PostsContext } from '../store/PostsContext';

export const PostsPage: React.FC = () => {
  const { posts, loading, errorMessage, loadPosts } = useContext(PostsContext);
  const userId = 11;

  useEffect(() => {
    loadPosts(userId);
  }, [userId]);

  if (loading) {
    return <Loader />
  }

  return (
    <div className="">
      <h1 className="title">User {userId} Posts</h1>

      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <p>There are no posts yet</p>
      )}

      <a href="#/posts/new" className="button is-info">Create a post</a>

      {errorMessage && (
        <p className="notification is-danger">{errorMessage}</p>
      )}
    </div>
  );
};
