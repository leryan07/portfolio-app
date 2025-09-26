import { default as Grid, default as Item } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import 'typeface-roboto';
import './App.css';
import NavigationBar from './components/navigationBar';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

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

  useEffect(() => {
    setShowFirst(true);

    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Grid
      container
      spacing={4}
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
      {/* <Grid item className={classes.bioGrid}>
          <BioCard t={t} />          
        </Grid> */}
      <Grid size={{ xs: 12 }}
        sx={{
          display: 'flex',
        }}>
        <Item>
          <Typography
            variant="h1"
            sx={{
              opacity: showFirst ? 1 : 0,
              transform: showFirst ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 3s ease',
            }}
          >
            Ryan
          </Typography>
          <Typography
            variant="h1"
            sx={{
              opacity: showSecond ? 1 : 0,
              transform: showSecond ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 3s ease',
            }}
          >
            Le
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
}

export default App;