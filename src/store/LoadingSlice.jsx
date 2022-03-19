import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const slice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    updateLoading: (state, action) => action.payload,
  },
});

export const { updateLoading } = slice.actions;

export default slice.reducer;
