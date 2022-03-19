import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import { getUser } from '../api';

export const getGitUser = createAsyncThunk(
  'user/get',
  async (userName, { dispatch }) => await getUser(userName)
);

const slice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getGitUser.fulfilled]: (state, action) => action.payload,
  },
});

// export const {  } = slice.actions;

export default slice.reducer;
