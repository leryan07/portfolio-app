import React from 'react';
import 'typeface-roboto';
// import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { LinkedIn, GitHub, LocationOn, School } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  appBarTitle: {
    flexGrow: 1
  },
  roleTitle: {
    paddingTop: '20px',
    paddingBottom: '20px'
  },
  bioCardRoot: {
    width: 'fit-content',
    minWidth: 'fit-content',
    margin: 'auto'
  },
  mainContainer: {
    paddingTop: '10px',
    margin: 'auto',
    width: '50%',
    justifyContent: 'space-between'
  },
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <AppBar color='default' position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.appBarTitle}>
            Ryan Le
          </Typography>
          <IconButton href='https://www.linkedin.com/in/leryan07/' target='_blank'>
            <LinkedIn />
          </IconButton>
          <IconButton href='https://github.com/leryan07' target='_blank'>
            <GitHub />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className={classes.mainContainer}>
        <Typography variant='h3' align='center' className={classes.roleTitle}>
          Software Developer
        </Typography>
        <Card raised={true} className={classes.bioCardRoot}>
          <CardContent>
            <Typography style={{ paddingLeft: '16px' }}>
              Bio
            </Typography>
            <hr />
            <List>
                <ListItem>
                  <ListItemIcon>
                    <LocationOn />
                  </ListItemIcon>
                  <ListItemText>
                    Austin, TX
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <School />
                  </ListItemIcon>
                  <ListItemText>
                    Florida Atlantic University
                  </ListItemText>
                </ListItem>
            </List>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
