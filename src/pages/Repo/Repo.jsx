import { Grid, Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  SkeletonCircular,
  SkeletonRectangular,
  SkeletonText,
} from '../../components/Skeleton/Skeleton';

export const Repo = () => {
  const loadingRedux = useSelector(({ loading }) => loading);
  const contentRedux = useSelector(({ content }) => content);

  useEffect(() => {
    if (!contentRedux.active) {
      console.log('navegar para home');
    }
  }, [contentRedux]);

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
                __html: contentRedux.html,
              }}
            />
          </Grid>
        )}
      </>
    </Grid>
  );
};
