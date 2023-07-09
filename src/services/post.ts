import { Post } from '../types';
import { client } from '../utils/httpClient';

export function getUserPosts(userId: number) {
  return client.get<Post[]>(`/posts?userId=${userId}`)
}

export function deletePost(postId: number) {
  return client.delete<Post[]>(`/posts/${postId}`)
}
