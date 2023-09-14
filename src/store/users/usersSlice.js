import { createSlice } from '@reduxjs/toolkit';
// import cartItems from '../../cartItems';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      {
        id: 1,
        title: 'Mr.',
        first: 'John',
        last: 'Smith',
      },
      {
        id: 2,
        title: 'Ms.',
        first: 'Emilia',
        last: 'Clark',
      },
    ],
    isLoading: true,
    error: null,
  },
  reducers: {
    getUsers: () => {
      const usersObject = usersSlice.users;
      return usersObject;
    },
    // state.cartItems = [];
    // return usersObject;
  },
  // createUser: (isLoading) => {
  //   state.cartItems = [];
  // },
  // removeUser: (isLoading, action) => {
  //   const itemId = action.payload;
  //   state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
  // },
});

export const { getUsers } = usersSlice.actions;

export default usersSlice;
