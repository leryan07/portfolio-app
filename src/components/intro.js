import { withTranslation } from "react-i18next"
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { default as Grid, default as Item } from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Intro = ({ t }) => {
    const theme = useTheme();
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
                        sx={{ fontSize: { xs: '3rem', md: '8vw', lg: '10vw', color: theme.palette.primary.main } }}
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
                        sx={{ fontSize: { xs: '3rem', md: '8vw', lg: '10vw', color: theme.palette.secondary.main } }}
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