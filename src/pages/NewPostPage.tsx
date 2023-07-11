import { useContext } from 'react';
import { PostForm } from '../components/PostForm';
import { useUsers } from '../store/UsersContext';
import { PostsContext } from '../store/PostsContext';
import { Post } from '../types';

export const NewPostPage = () => {
  const { addPost } = useContext(PostsContext);
  const users = useUsers();

  const handleSubmit = ({ title, userId, body }: Omit<Post, 'id'>) => {
    return addPost({ title, userId, body });
  }

  return <>
    <h1 className="title">Write a post</h1>

    <PostForm
      users={users}
      fixedUserId={11}
      onSubmit={handleSubmit}
    />
  </>;
}