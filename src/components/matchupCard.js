import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { convertToLocalTime } from '../utils/dateUtil';
import { useTranslation } from 'react-i18next';

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

    return (
        <BoxStyled width="fit-content">
            <Box display="flex" justifyContent="space-between">
                <Typography variant="body1" sx={{ minWidth: 200 }}>
                    {matchup.league === 'nfl' ?
                        `Week ${matchup.weekNumber}` : ''
                    }
                </Typography>
                <Typography variant="body1">
                    {matchupState === 'post' ? t('final') :
                        convertToLocalTime(matchup.date)
                    }
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" sx={{ mt: 1 }}>
                <Typography variant="body1" sx={{ minWidth: 200 }}>
                    {matchup.away}
                </Typography>
                <Typography variant="body1">
                    {matchupState === 'pre' ?
                        matchup.awayTeamOverallRecord :
                        matchup.awayScore
                    }
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="body1" sx={{ minWidth: 200 }}>
                    {matchup.home}
                </Typography>
                <Typography variant="body1">
                    {matchupState === 'pre' ?
                        matchup.homeTeamOverallRecord :
                        matchup.homeScore
                    }
                </Typography>
            </Box>
        </BoxStyled>
    )
};