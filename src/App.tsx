// #region imports 
import React, {useCallback, useMemo, useRef, useState} from 'react';

import { Post } from './types/Post';
import { getMaxId, getPreparedPosts } from './services/posts';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
import debounce from 'lodash.debounce';
// #endregion

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');

  const timerId = useRef(0);

  const applyQuery = useCallback(debounce(setAppliedQuery, 1000), []);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    applyQuery(event.target.value);
  }

  const [posts, setPosts] = useState<Post[]>(getPreparedPosts());

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
    setPosts(currentPosts => currentPosts.filter(post => post.id !== postId))
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => post.title.includes(appliedQuery))
  }, [appliedQuery, posts]);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  const updatePost = useCallback((updatedPost: Post) => {
      setPosts(currentPost => {
        const newPosts = [...currentPost];
        const index = currentPost.findIndex(post => post.id === updatedPost.id);


        newPosts.splice(index, 1, updatedPost);

        return newPosts
      })
    },[],
  );


  return (
    <div className="section py-5">
      <div className="columns is-mobile">
        <div className="column">
          <h1 className="title">Posts</h1>
        </div>

        <div className="column">
          <input
            autoFocus
            type="text"
            className="input is-rounded"
            value={query}
            onChange={handleQueryChange}
          />
        </div>
      </div>

      <PostList
        posts={filteredPosts}
        selectedPostId={selectedPost?.id}
        onDelete={deletePost}
        onSelect={setSelectedPost}
      />

      {selectedPost ? (
          <PostForm
            onSubmit={updatePost}
            post={selectedPost}
            key={selectedPost.id}
            onReset={() => setSelectedPost(null)}
          />
        ) : (
          <PostForm onSubmit={addPost} />
        )
      }
    </div>
  );
};