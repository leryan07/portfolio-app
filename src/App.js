import { default as Grid, default as Item } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import 'typeface-roboto';
import './styles/app.css';
import NavigationBar from './components/navigationBar';
import Intro from './components/intro';
import AboutMe from './components/aboutMe';

const SectionCommon = styled('section')(({ theme, variant }) => ({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 0,
  padding: 0,
  ...(variant === 'intro' && {
    minHeight: 'calc(100vh - 64px)',
    marginTop: '64px',
    backgroundImage: theme.custom.gradients.sectionIntro,
  }),
  ...(variant === 'aboutMe' && {
    backgroundImage: theme.custom.gradients.sectionAboutMe,
  })
}));

function App() {
  const { t } = useTranslation();

  return (
    <Grid
      container
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid size={{ xs: 12 }}>
        <Item>
          <NavigationBar t={t} />
        </Item>
      </Grid>
      <SectionCommon id="introduction" variant="intro">
        <Intro t={t} />
      </SectionCommon>
      <SectionCommon id='about-me' variant='aboutMe'>
        <AboutMe t={t} />
      </SectionCommon>
    </Grid >
  );
}

export default App;