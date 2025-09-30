import { withTranslation } from "react-i18next"
import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material";
import { default as Grid, default as Item } from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const AboutMe = ({ t }) => {
    const theme = useTheme();

    return (
        <Grid container>
            <Grid size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Item>
                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <Typography variant="h1" align="center" sx={{}}>About Me</Typography>
                        <Typography variant="body1" sx={{ marginTop: '1em' }} align="center">
                            This section is under development.
                        </Typography>
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