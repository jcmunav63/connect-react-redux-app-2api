import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../store/users/usersSlice';
import UsersDetails from './components/UsersDetails';

function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const error = useSelector((state) => state.users.error);
  const appId = 'key';

  // const usersArray = Object.entries(users).flatMap(([userId, itemUsers]) => itemUsers.map(
  //  (user) => ({ ...user, user_id: userId }),
  // ));
  // console.log(usersArray);

  useEffect(() => {
    if (isLoading === true) {
      dispatch(getUsers(appId));
    }
  }, [dispatch, isLoading]);

  return (
    <div className="userslist">
      {isLoading === true && <div>Loading...</div>}
      {isLoading === false && error === true && (
      <div>
        Error:
        {error}
      </div>
      )}
      {isLoading === false && error === false && (
      <>
        <div>
          <div className="userslisth3">
            <h3>Users List...</h3>
          </div>
          <ul>
            {users.map((user) => (
              <li className="liuser" key={user.id}>
                <UsersDetails user={user} />
              </li>
            ))}
          </ul>
        </div>
      </>
      )}
    </div>
  );
}

export default UsersList;