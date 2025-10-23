import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { convertToLocalTime } from '../utils/dateUtil';

const BoxStyled = styled(Box)(({ theme }) => ({
    padding: '8px',
    border: '3px solid #0000',
    borderRadius: '12px',
    background: theme.custom.gradients.aboutMeList,
    animation: '8s rotate linear infinite',
}));

export const MatchupCard = ({ matchup }) => {
    return (
        <BoxStyled width="fit-content">
            <Box display="flex" justifyContent="space-between">
                <Typography variant="body1" sx={{ minWidth: 150 }}>
                    {matchup.league === 'nfl' ?
                        `Week ${matchup.weekNumber}` : ''
                    }
                </Typography>
                <Typography variant="body1">{convertToLocalTime(matchup.date)}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" sx={{ mt: 1 }}>
                <Typography variant="body1" sx={{ minWidth: 150 }}>
                    {matchup.away}
                </Typography>
                <Typography variant="body1">
                    {matchup.status.type.state === 'pre' ?
                        matchup.awayTeamOverallRecord :
                        matchup.awayScore
                    }
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="body1" sx={{ minWidth: 150 }}>
                    {matchup.home}
                </Typography>
                <Typography variant="body1">
                    {matchup.status.type.state === 'pre' ?
                        matchup.homeTeamOverallRecord :
                        matchup.homeScore
                    }
                </Typography>
            </Box>
        </BoxStyled>
    )
};