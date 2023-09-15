import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk('users/getUsers', async (thunkAPI) => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=6');
    const data = await response.json();
    return data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      'An error ocurred while fetching the users',
    );
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
