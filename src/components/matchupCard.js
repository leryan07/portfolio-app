import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const BoxStyled = styled(Box)(({ theme }) => ({
    padding: '8px',
    border: '3px solid #0000',
    borderRadius: '12px',
    background: theme.custom.gradients.aboutMeList,
    animation: '8s rotate linear infinite',
}));

export const MatchupCard = ({ matchup }) => (
    <BoxStyled width={300}>
        <Box display="flex" justifyContent="space-between">
            <Typography variant="body1" sx={{ minWidth: 150 }}>
                {matchup.away}
            </Typography>
            <Typography variant="body1">{matchup.awayScore}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
            <Typography variant="body1" sx={{ minWidth: 150 }}>
                {matchup.home}
            </Typography>
            <Typography variant="body1">{matchup.homeScore}</Typography>
        </Box>
    </BoxStyled>
);