/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';

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

      <Link to="/posts/new" className="button is-info">
        Create a post
      </Link>

      {errorMessage && (
        <p className="notification is-danger">{errorMessage}</p>
      )}
    </div>
  );
};
