import React from 'react';
import { User } from '../types/User';

type Props = {
  users: User[];
  selectedUser?: User | null;
  onSelect?: (user: User | null) => void;
};

export const UsersList: React.FC<Props> = ({
  users,
  selectedUser = null,
  onSelect = () => { },
}) => {
  const isUserSelected = ({ id }: User) => id === selectedUser?.id;

  return (
    <table className="table is-narrow">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              {isUserSelected(user) ? (
                <button
                  onClick={() => onSelect(null)}
                  className="icon button is-success"
                >
                  <i className="far fa-eye-slash" />
                </button>
              ) : (
                <button
                  onClick={() => onSelect(user)}
                  className="icon button is-success is-inverted"
                >
                  <i className="far fa-eye" />
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
