import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
  html: undefined,
};

const slice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    updateContent: (state, action) => action.payload,
  },
});

export const { updateContent } = slice.actions;

export default slice.reducer;
