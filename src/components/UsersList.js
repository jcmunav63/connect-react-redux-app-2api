import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../store/users/usersSlice';
// import UsersDetails from './components/UsersDetails';

function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const error = useSelector((state) => state.users.error);
  const appId = 'key';

  // const booksArray = Object.entries(books).flatMap(([itemId, itemBooks]) => itemBooks.map(
  //  (book) => ({ ...book, item_id: itemId }),
  // ));
  // console.log(booksArray);

  useEffect(() => {
    if (isLoading === true) {
      dispatch(getUsers(appId));
    }
  }, [dispatch, isLoading]);

  return (
    <div className="userslist">
      {status === 'Loading' && <div>Loading...</div>}
      {status === 'Failed' && (
      <div>
        Error:
        {error}
      </div>
      )}
      {status === 'Succeeded' && (
      <>
        <div>
          <div className="userslisth3">
            <h3>Users List...</h3>
          </div>
          <ul>
            {users.map((user) => (
              <li className="liuser" key={user.id}>
                <Bookdetails user={user} />
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