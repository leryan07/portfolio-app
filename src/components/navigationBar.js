import { withTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { LinkedIn, GitHub } from '@mui/icons-material';
import PropTypes from 'prop-types';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const NavigationBar = ({ t }) => {
    return (
        <AppBar position='static' enableColorOnDark>
            <Toolbar>
                <Typography variant='h6' sx={{ flexGrow: 1 }} color='primary'>
                    {t('siteName')}
                </Typography>
                <StyledIconButton href='https://www.linkedin.com/in/leryan07/' target='_blank' size='large'>
                    <LinkedIn fontSize='inherit' />
                </StyledIconButton>
                <StyledIconButton href='https://github.com/leryan07' target='_blank' size='large'>
                    <GitHub fontSize='inherit' />
                </StyledIconButton>
            </Toolbar>
        </AppBar>
    );
};

NavigationBar.propTypes = {
    t: PropTypes.func.isRequired
};

export default withTranslation()(NavigationBar);