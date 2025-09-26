import { withTranslation } from "react-i18next"
import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material";

const AboutMe = ({ t }) => {
    const theme = require('@mui/material/styles').useTheme();
    return (
        <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Typography variant="h1" align="center" sx={{ color: theme.palette.primary.main }}>About Me</Typography>
            <Typography variant="body1" sx={{ marginTop: '1em', color: theme.palette.primary.main }} align="center">
                This section is under development.
            </Typography>
        </Box>
    );
};

AboutMe.propTypes = {
    t: PropTypes.func.isRequired
};

export default withTranslation()(AboutMe);