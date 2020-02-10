import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { LocationOn, School } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
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
    hrStyle: {
        borderColor: '#F8AF8F'
    }
}));

const BioCard = (props) => {
    const classes = useStyles();

    return (
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
    );
};

export default BioCard;