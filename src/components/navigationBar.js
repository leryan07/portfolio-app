import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { LinkedIn, GitHub } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    appBarTitle: {
        flexGrow: 1
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

const NavigationBar = (props) => {
    const classes = useStyles();

    return (
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
    );
};

export default NavigationBar;