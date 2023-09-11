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
    createUser: (state) => {
      // state.cartItems = [];
    },
    removeUser: (state, action) => {
      // const itemId = action.payload;
      // state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
  extraReducers: {
  },
});

export const{ createUser, removeUser } = usersSlice.actions;

export default usersSlice;
