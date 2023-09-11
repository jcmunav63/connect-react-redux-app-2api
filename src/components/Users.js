import React from 'react';
import UsersList from './components/UsersList';

const Users = () => {
  // const users = [];

  return (
    <div className="divusers">
      <UsersList objectUsers={objectUsers} />
    </div>
  );
};

export default Users;