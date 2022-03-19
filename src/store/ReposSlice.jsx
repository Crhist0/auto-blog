import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import { getUserRepos } from '../api';

export const getGitRepos = createAsyncThunk(
  'repos/get',
  async (userName, { dispatch }) => await getUserRepos(userName)
);

const adapter = createEntityAdapter({
  selectId: (repos) => repos.id,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state) => state.repos
);

const slice = createSlice({
  name: 'repos',
  initialState: adapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [getGitRepos.fulfilled]: adapter.setAll,
  },
});

// export const {  } = slice.actions;

export default slice.reducer;
