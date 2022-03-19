import { Container, Grid, Typography, Avatar } from '@mui/material';

import { useSelector } from 'react-redux';

import { selectAll as reposSelect } from '../../store/ReposSlice';
import RepoCard from '../../components/RepoCard/RepoCard';

export const Landing = () => {
  const user = useSelector(({ user }) => user);

  const repos = useSelector(reposSelect);

  return (
    <Container sx={{ height: '100vh' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item sx={{ height: '5vh' }}></Grid>
        <Grid container item sx={{ height: '90vh' }}>
          <Grid
            container
            spacing={5}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            item
          >
            <Grid item>
              <Avatar
                alt={user.name}
                src={user.avatar_url}
                sx={{ width: 300, height: 300, margin: '1rem 0rem' }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h4">{user.name}</Typography>
              <Typography variant="h5"> {user.bio}</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            wrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {repos.map((repo, key) => {
              return (
                <Grid key={key} item width={400} m={1}>
                  <RepoCard repo={repo} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item sx={{ height: '5vh' }}></Grid>
      </Grid>
    </Container>
  );
};
