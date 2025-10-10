import { default as Grid, default as Item } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import 'typeface-roboto';
import './styles/app.css';
import NavigationBar from './components/navigationBar';
import Intro from './components/intro';
import AboutMe from './components/aboutMe';

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
        <Intro t={t} />
      </section>
      <section id='about-me' className='section-common section-about'>
        <AboutMe t={t} />
      </section>
    </Grid >
  );
}

export default App;