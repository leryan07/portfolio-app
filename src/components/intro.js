import { withTranslation } from "react-i18next"
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { default as Grid, default as Item } from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../styles/intro.css';

const introTypographyStyle = (theme, color) => ({
    fontSize: { xs: '3rem', md: '6vw' },
    color: color ?? theme.palette.primary.main
});

const Intro = ({ t }) => {
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);

    useEffect(() => {
        setShowFirst(true);

        const timer = setTimeout(() => {
            setShowSecond(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Grid container>
            <Grid size={{ xs: 6 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Item>
                    <Typography
                        variant="h1"
                        className={showFirst ? 'slide-in-left' : 'slide-init-left'}
                        sx={(theme) => introTypographyStyle(theme)}
                    >
                        {t('name').split(' ')[0]}
                    </Typography>
                </Item>
            </Grid>
            <Grid size={{ xs: 6 }} />
            <Grid size={{ xs: 6 }} />
            <Grid size={{ xs: 6 }}>
                <Item>
                    <Typography
                        variant="h1"
                        className={showSecond ? 'slide-in-right' : 'slide-init-right'}
                        sx={(theme) => introTypographyStyle(theme, theme.palette.secondary.main)}
                    >
                        {t('name').split(' ')[1]}
                    </Typography>
                </Item>
            </Grid>
        </Grid>
    )
};

Intro.propTypes = {
    t: PropTypes.func.isRequired
};

export default withTranslation()(Intro);