import React, { useState } from 'react';
import usersFromServer from './api/users.json';
import { UsersList } from './components/UserList';
import { User } from './types';
import { PostsPage } from './PostsPage';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>(usersFromServer);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="section py-5">
      <div className="box">
        <div className="title">Users</div>

        {users.length > 0 && (
          <UsersList
            users={users}
            selectedUser={selectedUser}
            onSelect={setSelectedUser}
          />
        )}
      </div>

      {selectedUser && (
        <PostsPage />
      )}
    </div>
  );
};
