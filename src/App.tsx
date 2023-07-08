import React, { useEffect, useState } from 'react';
import { UsersList } from './components/UserList';
import { User } from './types';
import { getUsers } from './services/user';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers)
  }, []);

  return (
    <div className="section py-5">
      <div className="box">
        <div className="title">Users</div>

        <UsersList users={users} />
      </div>
    </div>
  );
};
