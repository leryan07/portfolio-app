import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { convertToLocalTime } from '../utils/dateUtil';
import { useTranslation } from 'react-i18next';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const BoxStyled = styled(Box)(({ theme }) => ({
    padding: '8px',
    border: '3px solid #0000',
    borderRadius: '12px',
    background: theme.custom.gradients.aboutMeList,
    animation: '8s rotate linear infinite',
}));

export const MatchupCard = ({ matchup }) => {
    const { t } = useTranslation();
    const matchupState = matchup.status.type.state;
    const homeTeam = matchup.home;
    const awayTeam = matchup.away;
    const homeScore = Number(matchup.homeScore);
    const awayScore = Number(matchup.awayScore);

    let winner;
    if (matchup.league === 'nfl' && (homeScore === awayScore)) {
        winner = 'tie';
    } else if (homeScore > awayScore) {
        winner = homeTeam;
    } else if (homeScore < awayScore) {
        winner = awayTeam;
    } else {
        null
    }

    return (
        <BoxStyled width="fit-content">
            <Box display="flex" justifyContent="space-between">
                <Typography variant="body1" sx={{ minWidth: 200 }}>
                    {matchup.league === 'nfl' ?
                        `Week ${matchup.weekNumber}` : ''
                    }
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                    <Typography variant="body1" sx={{ textAlign: 'right', flexGrow: 1 }}>
                        {matchupState === 'post' ? t('final') :
                            convertToLocalTime(matchup.date)
                        }
                    </Typography>
                    {matchupState === 'post' && (
                        <Box sx={{ width: 24, height: 24, display: 'flex' }} />
                    )}
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" sx={{ mt: 1 }}>
                <Typography variant="body1" sx={{ minWidth: 200 }}>
                    {matchup.away}
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                    <Typography variant="body1" sx={{ textAlign: 'right', flexGrow: 1 }}>
                        {matchupState === 'pre' ? matchup.awayTeamOverallRecord : matchup.awayScore}
                    </Typography>
                    {
                        matchupState === 'post' && (
                            <Box sx={{ width: 24, height: 24, display: 'flex' }}>
                                {winner === awayTeam && <ArrowLeftIcon />}
                            </Box>
                        )
                    }
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="body1" sx={{ minWidth: 200 }}>
                    {matchup.home}
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                    <Typography variant="body1" sx={{ textAlign: 'right', flexGrow: 1 }}>
                        {matchupState === 'pre' ? matchup.homeTeamOverallRecord : matchup.homeScore}
                    </Typography>
                    {
                        matchupState === 'post' && (
                            <Box sx={{ width: 24, height: 24, display: 'flex' }}>
                                {winner === homeTeam && <ArrowLeftIcon />}
                            </Box>
                        )
                    }
                </Box>
            </Box>
        </BoxStyled>
    )
};