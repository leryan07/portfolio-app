import { withTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { LinkedIn, GitHub } from '@mui/icons-material';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import React from 'react';
import ThemeSwitch from './themeSwitch';
import { useThemeToggle } from './themeContext';
import { keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children ?? <div />}
        </Slide>
    );
}

const fallIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fallOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
`;

const NavigationBar = ({ t }) => {
    const { mode } = useThemeToggle();
    const [siteName, setSiteName] = useState(t('siteName'));
    const [animatingOut, setAnimatingOut] = useState(false);

    const siteNameAnimation = animatingOut
        ? `${fallOut} 0.4s ease forwards`
        : `${fallIn} 0.4s ease forwards`;

    useEffect(() => {
        setAnimatingOut(true);

        const timeout = setTimeout(() => {
            setSiteName(mode === 'light' ? t('siteName') : t('siteNameDark'));
            setAnimatingOut(false);
        }, 400);

        return () => clearTimeout(timeout);
    }, [mode]);
    
    return (
        <React.Fragment>
            <HideOnScroll>
                <AppBar position='fixed' enableColorOnDark>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            sx={{
                                flexGrow: 1,
                                animation: siteNameAnimation,
                            }}
                            color="primary.main"
                        >
                            {siteName}
                        </Typography>
                        <StyledIconButton href='https://www.linkedin.com/in/leryan07/' target='_blank' size='large'>
                            <LinkedIn fontSize='inherit' />
                        </StyledIconButton>
                        <StyledIconButton href='https://github.com/leryan07' target='_blank' size='large'>
                            <GitHub fontSize='inherit' />
                        </StyledIconButton>
                        <ThemeSwitch />
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </React.Fragment >
    );
};

NavigationBar.propTypes = {
    t: PropTypes.func.isRequired
};

export default withTranslation()(NavigationBar);