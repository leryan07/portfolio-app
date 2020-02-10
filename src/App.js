import React from 'react';
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
  const classes = useStyles();

  return (
    <div>
      <NavigationBar />
      <Container className={classes.mainContainer}>
        <BioCard />
      </Container>
    </div>
  );
}

export default App;
