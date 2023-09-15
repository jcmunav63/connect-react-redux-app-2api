import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../store/users/usersSlice';

function Userlist() {
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="userslist">
      {isLoading === true && <div>Loading...</div>}
      {isLoading === false && error === true && (
      <div>
        Error:
        {error}
      </div>
      )}
      {isLoading === false && error === null && (
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.login.uuid}>
              <span className="name arial">{user.name.title}</span>
              <span>&nbsp;&nbsp;</span>
              <span className="name arial">{user.name.first}</span>
              <span>&nbsp;&nbsp;</span>
              <span className="name arial">{user.name.last}</span>
              <span>&nbsp;&nbsp;</span>
              <span className="name arial">{user.nat}</span>
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
}

export default Userlist;
