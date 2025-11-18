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
    const matchupType = matchup.status.type;
    const matchupState = matchupType.state;
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

    let status;
    switch (matchupState) {
        case 'post':
            status = t('final');
            break;
        case 'in':
            status = matchupType.shortDetail;
            break;
        default:
            status = convertToLocalTime(matchup.date);
            break;
    }

    return (
        <BoxStyled sx={{ minWidth: 300 }}>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="body1">
                    {matchup.league === 'nfl' ?
                        `Week ${matchup.weekNumber}` : ''
                    }
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                    <Typography variant="body1">
                        {status}
                    </Typography>
                    {
                        matchupState === 'post' && (
                            <Box sx={{ width: 24, height: 24, display: 'flex' }} />
                        )
                    }
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
                <Typography variant="body1">
                    {matchup.away}
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                    <Typography variant="body1">
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
                <Typography variant="body1">
                    {matchup.home}
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                    <Typography variant="body1">
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