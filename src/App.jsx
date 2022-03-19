import { ThemeProvider, CssBaseline } from '@mui/material';

import { Router } from './routes/Router';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getGitRepos } from './store/ReposSlice';

import darkTheme from './Themes/DarkTheme';
import lightTheme from './Themes/LightTheme';

import { getGitUser } from './store/UserSlice';

let theme = {
  light: lightTheme,
  dark: darkTheme,
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGitUser(process.env.REACT_APP_USER));
    dispatch(getGitRepos(process.env.REACT_APP_USER));
  }, []);

  const currentTheme = useSelector((state) => state.theme.mode);

  return (
    <>
      <ThemeProvider
        theme={currentTheme === 'light' ? theme.light : theme.dark}
      >
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
