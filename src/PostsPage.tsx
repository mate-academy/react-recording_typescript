// #region imports 
import React, { useCallback, useState } from 'react';
import { Post } from './types/Post';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
// #endregion

function getMaxId(posts: Post[]) {
  return Math.max(
    ...posts.map(post => post.id),
  );
}

export const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(postsFromServer);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const addPost = useCallback((post: Post) => {
    setPosts(currentPosts => {
      const newPost = {
        ...post,
        id: getMaxId(currentPosts) + 1,
      };

      return [...currentPosts, newPost];
    });
  }, []);

  const deletePost = useCallback((postId: number) => {
    setPosts(currentPosts => currentPosts.filter(post => post.id !== postId));
  }, []);

  const updatePost = useCallback((updatedPost: Post) => {
    setPosts(currentPosts => {
      const newPosts = [...currentPosts];
      const index = newPosts.findIndex(post => post.id === updatedPost.id);

      newPosts.splice(index, 1, updatedPost);

      return newPosts;
    });
  }, []);

  return (
    <div className="box">
      <h2 className="title is-4">User Posts</h2>

      <PostList
        posts={posts}
        selectedPostId={selectedPost?.id}
        onDelete={deletePost}
        onSelect={setSelectedPost}
      />

      <hr />

      {selectedPost ? (
        <PostForm
          key={selectedPost.id}
          post={selectedPost}
          onSubmit={updatePost}
          onReset={() => setSelectedPost(null)}
        />
      ) : (
        <PostForm
          onSubmit={addPost}
        />
      )}
    </div>
  );
};
