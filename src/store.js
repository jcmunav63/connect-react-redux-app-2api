import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './store/users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ // ELIM
    serializableCheck: false, // ELIM
  }), // ELIM
});

export default store;
