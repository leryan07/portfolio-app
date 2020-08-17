import React from 'react';
import { useTranslation } from 'react-i18next';
import 'typeface-roboto';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import NavigationBar from './components/navigationBar';
import BioCard from './components/bioCard';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '40px',
    margin: 'auto',
    width: '50%',
    justifyContent: 'space-between'
  }
}));

function App() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div>
      <NavigationBar t={t} />
      <Container className={classes.mainContainer}>
        <BioCard t={t} />
      </Container>
    </div>
  );
}

export default App;
