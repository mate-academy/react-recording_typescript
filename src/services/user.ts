// #region imports
import { User } from '../types';
import { client } from '../utils/httpClient';

export function getUsers() {
  return client.get<User[]>('/users')
    .then(users => users.slice(0, 11))
}
// #endregion

export function getUsers2() {
  return client.get<User[]>('/users')
    .then(users => users.slice(0, 11))
    .catch(error => {
      console.log('Catch', error)
    })
    .finally(() => {
      console.log('Finally');
    })
}

export async function getUsers3() {
  try {
    const users = await client.get<User[]>('/users');

    return users.slice(0, 11);
  } catch (error) {
    console.log('Catch', error)
  } finally {
    console.log('Finally');
  }
}

export const getUsers4 = async() => {
  const [users, posts] = await Promise.allSettled([
    client.get<User[]>('/users'),
    client.get<User[]>('/posts'),
  ]);

  return users.slice(0, 11);
}
