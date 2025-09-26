import { withTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { LocationOn, School } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';

const useStyles = styled(() => ({
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

BioCard.propTypes = {
    t: PropTypes.func.isRequired
};

export default withTranslation()(BioCard);