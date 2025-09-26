import { default as Grid, default as Item } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import 'typeface-roboto';
import './App.css';
import NavigationBar from './components/navigationBar';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import AboutMe from './components/aboutMe';
import { useTheme } from '@mui/material/styles';

const useStyles = styled(() => ({
  root: {
    flexGrow: 1
  },
  bioGrid: {
    marginTop: '2em'
  }
}));

function App() {
  const { t } = useTranslation();
  const classes = useStyles();

  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    setShowFirst(true);

    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid
      container
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className={classes.root}
    >
      <Grid size={{ xs: 12 }}>
        <Item>
          <NavigationBar t={t} />
        </Item>
      </Grid>
      <section id="introduction" className="section-common section-intro">
        <Grid container>
          <Grid size={{ xs: 6 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Item>
              <Typography
                variant="h1"
                className={showFirst ? 'slide-in-left' : 'slide-init-left'}
                sx={{ color: theme.palette.secondary.main, fontSize: { xs: '3rem', md: '8vw', lg: '10vw' } }}
              >
                Ryan
              </Typography>
            </Item>
          </Grid>
          <Grid size={{ xs: 6 }} />
          <Grid size={{ xs: 6 }} />
          <Grid size={{ xs: 6 }}>
            <Item>
              <Typography
                variant="h1"
                className={showSecond ? 'slide-in-right' : 'slide-init-right'}
                sx={{ color: theme.palette.secondary.main, fontSize: { xs: '3rem', md: '8vw', lg: '10vw' } }}
              >
                Le
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </section>
      <section id='about-me' className='section-common section-about'>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: '100%' }}
        >
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Item>
              <AboutMe t={t} />
            </Item>
          </Grid>
        </Grid>
      </section>
    </Grid >
  );
}

export default App;