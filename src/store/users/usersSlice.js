import { createSlice } from "@reduxjs/toolkit";
// import cartItems from '../../cartItems';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    createUser: (isLoading) => {
      // state.cartItems = [];
    },
    removeUser: (isLoading, action) => {
      // const itemId = action.payload;
      // state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
  extraReducers: {
  },
});

export const{ createUser, removeUser } = usersSlice.actions;

export default usersSlice;
