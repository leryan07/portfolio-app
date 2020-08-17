import React from 'react';
import { withTranslation } from 'react-i18next';
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
        backgroundColor: '#162039',
        color: '#DF4277',
        width: '20em'
    },
    bioListItemIcon: {
        color: '#F8AF8F'
    },
    hrStyle: {
        borderColor: '#F8AF8F'
    }
}));

const BioCard = ({ t }) => {
    const classes = useStyles();

    return (
        <Card raised={true} className={classes.bioCardRoot}>
            <CardContent>
                <Typography variant='h5' align='center'>
                    {t('jobTitle')}
                </Typography>
                <hr className={classes.hrStyle} />
                <List>
                    <ListItem>
                        <ListItemIcon className={classes.bioListItemIcon}>
                            <LocationOn />
                        </ListItemIcon>
                        <ListItemText>
                            {t('location')}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon className={classes.bioListItemIcon}>
                            <School />
                        </ListItemIcon>
                        <ListItemText>
                            {t('school')}
                        </ListItemText>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};

export default withTranslation()(BioCard);