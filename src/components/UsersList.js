import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../store/users/usersSlice';
import Usersdetails from './Usersdetails';

function Userslist() {
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const error = useSelector((state) => state.users.error);
  // const appId = 'key';
  const dispatch = useDispatch();
  // const usersObject = [
  //   {
  //     id: 1,
  //     title: 'Mr.',
  //     first: 'John',
  //     last: 'Smith',
  //   },
  //   {
  //     id: 2,
  //     title: 'Ms.',
  //     first: 'Emilia',
  //     last: 'Clark',
  //   },
  // ];

  // const usersArray = Object.entries(users).flatMap(([userId, itemUsers]) => itemUsers.map(
  //  (user) => ({ ...user, user_id: userId }),
  // ));
  // console.log(usersArray);

  useEffect(() => {
    isLoading = true;
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
      {isLoading === false && error === false && (
      <>
        <div>
          <div className="userslisth3 arial">
            <h3>Users List...</h3>
          </div>
          <ul>
            {users.map((user) => (
              <li className="liuser arial" key={user.id}>
                <Usersdetails key={user.id} user={user} />
              </li>
            ))}
          </ul>
        </div>
      </>
      )}
    </div>
  );
}

export default Userslist;
