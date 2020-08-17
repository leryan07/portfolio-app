import React from 'react';
import { useTranslation } from 'react-i18next';
import 'typeface-roboto';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import NavigationBar from './components/navigationBar';
import BioCard from './components/bioCard';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
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
      <Grid container alignItems='center' justify='center' className={classes.root}>
        <Grid item xs={12}>
          <NavigationBar t={t} />
        </Grid>
        <Grid item className={classes.bioGrid}>
          <BioCard t={t} />          
        </Grid>
      </Grid>
  );
}

export default App;