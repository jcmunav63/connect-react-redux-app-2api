import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './store/users/usersSlice';

// const rootReducer = usersReducer;
// ({
//   users: usersReducer,
// });

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
