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

const AboutMe = ({ t }) => {
    return (
        <Grid container>
            <Grid size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Item>
                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <Typography variant="h1" align="center">About Me</Typography>
                        <List sx={{ display: 'inline-block', mt: 3, padding: '12px' }} className="about-me-list">
                            <ListItem>
                                <AboutMeListIcon>
                                    <LocationOn />
                                </AboutMeListIcon>
                                <AboutMeListItemText>
                                    {t('location')}
                                </AboutMeListItemText>
                            </ListItem>
                            <ListItem>
                                <AboutMeListIcon>
                                    <School />
                                </AboutMeListIcon>
                                <AboutMeListItemText>
                                    {t('school')}
                                </AboutMeListItemText>
                            </ListItem>
                            <ListItem>
                                <AboutMeListIcon>
                                    <Timer />
                                </AboutMeListIcon>
                                <AboutMeListItemText>
                                    {t('yearsOfExperience', { count: getYearsOfExperience() })}
                                </AboutMeListItemText>
                            </ListItem>
                        </List>
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