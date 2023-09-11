import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './store/users/usersSlice';

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
