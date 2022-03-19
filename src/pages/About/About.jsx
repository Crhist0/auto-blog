import CustomizedSwitches from '../../components/ThemeSwitch/ThemeSwitch';
import { KofiButton } from '../../components/KofiButton/KofiButton';
import { BsGithub } from 'react-icons/bs';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import BasicTooltip from '../../components/Tooltip/Tooltip';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectAll as reposSelect } from '../../store/ReposSlice';
import { Link } from 'react-router-dom';
import { getUserRepoReadme } from '../../api';
import { updateLoading } from '../../store/LoadingSlice';
import {
  SkeletonCircular,
  SkeletonRectangular,
  SkeletonText,
} from '../../components/Skeleton/Skeleton';
import markdownDecodeAndParse from '../../utils/markdownParser';

export const About = () => {
  const loadingRedux = useSelector(({ loading }) => loading);
  const dispatch = useDispatch();
  const [userReadme, setUserReadme] = useState('');

  useEffect(() => {
    dispatch(updateLoading(true));
    getUserRepoReadme(process.env.REACT_APP_USER, process.env.REACT_APP_USER)
      .then((repo) =>
        markdownDecodeAndParse(repo.content).then((res) => setUserReadme(res))
      )
      .catch((err) => console.log(err))
      .finally(() =>
        setTimeout(() => {
          dispatch(updateLoading(false));
        }, 0)
      );
  }, []);

  const repos = useSelector(reposSelect);

  useEffect(() => console.log('userReadme: ', userReadme), [userReadme]);

  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <>
        {loadingRedux ? (
          <Grid
            container
            item
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <SkeletonRectangular w={200} h={50} />
            </Grid>
          </Grid>
        ) : (
          <Grid item>
            <Typography
              dangerouslySetInnerHTML={{
                __html: userReadme,
              }}
            />
          </Grid>
        )}
      </>
    </Grid>
  );
};
