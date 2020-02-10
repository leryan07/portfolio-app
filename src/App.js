import React from 'react';
import 'typeface-roboto';
import './App.css';
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
  hrStyle: {
    borderColor: '#F8AF8F'
  },
  appBarTitle: {
    flexGrow: 1
  },
  bioCardRoot: {
    width: 'fit-content',
    minWidth: 'fit-content',
    margin: 'auto',
    backgroundColor: '#162039',
    color: '#DF4277'
  },
  bioListItemIcon: {
    color: '#F8AF8F'
  },
  mainContainer: {
    marginTop: '40px',
    margin: 'auto',
    width: '50%',
    justifyContent: 'space-between'
  },
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%'
  },
  appBar: {
    backgroundColor: '#162039',
    color: '#F8AF8F'
  },
  appBarIcon: {
    color: '#F8AF8F',
    cursor: '#FFFFFF'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' className={classes.appBarTitle}>
            Ryan Le
          </Typography>
          <IconButton href='https://www.linkedin.com/in/leryan07/' target='_blank'>
            <LinkedIn className={classes.appBarIcon} />
          </IconButton>
          <IconButton href='https://github.com/leryan07' target='_blank'>
            <GitHub className={classes.appBarIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className={classes.mainContainer}>
        <Card raised={true} className={classes.bioCardRoot}>
          <CardContent>
            <Typography variant='h5' align='center'>
              Software Developer
            </Typography>
            <hr className={classes.hrStyle} />
            <List>
                <ListItem>
                  <ListItemIcon className={classes.bioListItemIcon}>
                    <LocationOn />
                  </ListItemIcon>
                  <ListItemText>
                    Austin, TX
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon className={classes.bioListItemIcon}>
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
