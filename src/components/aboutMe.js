import { withTranslation } from "react-i18next"
import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material";
import { default as Grid, default as Item } from '@mui/material/Grid';
import { LocationOn, School, Timer } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { getYearsOfExperience } from "../utils/experience";
import '../styles/aboutMe.css';

const AboutMeListIcon = styled(ListItemIcon)(({ theme }) => ({
    color: theme.palette.primary.main
}));

const AboutMeListItemText = styled(ListItemText)(({ theme }) => ({
    color: theme.palette.secondary.main
}));

const AboutMeListItem = styled(ListItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'clamp(0.9rem, 1.5vw, 1.5rem)',
    '& svg': {
        fontSize: 'inherit',
    },
    '& .MuiListItemText-primary': {
        fontSize: 'inherit',
    },
}));

const ListStyled = styled(List)(({ theme }) => ({
    marginTop: '48px',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3px solid #0000',
    borderRadius: '12px',
    background: theme.custom.gradients.aboutMeList,
    animation: '8s rotate linear infinite',
}));

const AboutMe = ({ t }) => {
    return (
        <Grid container>
            <Grid size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Item>
                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <Typography variant="h1" align="center">About Me</Typography>
                        <ListStyled sx={{ display: 'inline-block', mt: 3, padding: '12px' }}>
                            <AboutMeListItem>
                                <AboutMeListIcon>
                                    <LocationOn />
                                </AboutMeListIcon>
                                <AboutMeListItemText>
                                    {t('location')}
                                </AboutMeListItemText>
                            </AboutMeListItem>
                            <AboutMeListItem>
                                <AboutMeListIcon>
                                    <School />
                                </AboutMeListIcon>
                                <AboutMeListItemText>
                                    {t('school')}
                                </AboutMeListItemText>
                            </AboutMeListItem>
                            <AboutMeListItem>
                                <AboutMeListIcon>
                                    <Timer />
                                </AboutMeListIcon>
                                <AboutMeListItemText>
                                    {t('yearsOfExperience', { count: getYearsOfExperience() })}
                                </AboutMeListItemText>
                            </AboutMeListItem>
                        </ListStyled>
                    </Box>
                </Item>
            </Grid>
        </Grid>
    );
};

AboutMe.propTypes = {
    t: PropTypes.func.isRequired
};

export default withTranslation()(AboutMe);