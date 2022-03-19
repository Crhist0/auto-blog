import { combineReducers } from '@reduxjs/toolkit';

import theme from './ThemeSlice';
import user from './UserSlice';
import repos from './ReposSlice';
import loading from './LoadingSlice';
import content from './ContentSlice';

const createReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    theme,
    repos,
    user,
    loading,
    content,
  });

  return combinedReducer(state, action);
};

export default createReducer;
