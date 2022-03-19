import BasicTooltip from '../Tooltip/Tooltip';
import CustomizedSwitches from '../ThemeSwitch/ThemeSwitch';
import { KofiButton } from '../KofiButton/KofiButton';
import { BsGithub } from 'react-icons/bs';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  useTheme,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Appbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ transform: 'translateX(-50%)' }}
              >
                {props.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                <Box>
                  <Link to="/home">
                    <Button
                      id="home"
                      variant="outlined"
                      sx={{ color: useTheme().palette.background.default }}
                    >
                      home
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Link to="/about">
                    <Button
                      id="about"
                      variant="outlined"
                      sx={{ color: useTheme().palette.background.default }}
                    >
                      about
                    </Button>
                  </Link>
                </Box>
                <BasicTooltip placement="bottom" title="Theme" followCursor>
                  <Box ml={0.5} mr={0.5}>
                    <CustomizedSwitches />
                  </Box>
                </BasicTooltip>
                <BasicTooltip
                  placement="bottom"
                  title="Repository"
                  followCursor
                >
                  <a
                    href="https://github.com/Crhist0/auto-blog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Box
                      mt={1}
                      ml={0.5}
                      mr={0.5}
                      sx={{
                        fontSize: '1.9rem',
                        color: useTheme().palette.background.default,
                      }}
                    >
                      <BsGithub />
                    </Box>
                  </a>
                </BasicTooltip>
                <BasicTooltip
                  placement="bottom"
                  title="Buy me a coffee"
                  followCursor
                >
                  <Box ml={0.5} mr={0.5}>
                    <KofiButton />
                  </Box>
                </BasicTooltip>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
