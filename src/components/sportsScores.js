import { useState, useEffect, useRef } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { fetchNflScores, fetchNbaScores } from '../api/espnAPI';
import { MatchupCard } from './matchupCard';
import { useScrollPosition, useIsOverflowing } from '../hooks/scrollingHooks';
import { ScrollArrow } from './scrollArrow';
import { getFormattedDate } from '../utils/dateUtil';

function SportsScores() {
    const [scores, setScores] = useState([]);
    const [sportLeagueToggle, setSportLeagueToggle] = useState('nfl');

    const handleSportLeagueChange = (event, newLeague) => {
        setSportLeagueToggle(newLeague);
    };

    const scrollRef = useRef(null);
    const { atStart, atEnd } = useScrollPosition(scrollRef, [scores]);
    const scrollAmount = 700;

    const isOverflowing = useIsOverflowing(scrollRef, [scores]);

    useEffect(() => {
        switch (sportLeagueToggle) {
            case 'nfl':
                fetchNflScores().then(scores => setScores(scores));
                break;
            case 'nba':
                fetchNbaScores().then(scores => setScores(scores));
                break;
            default:
                break;
        }
    }, [sportLeagueToggle]);

    return (
        <Stack sx={{ position: 'relative', mx: 'auto' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ToggleButtonGroup
                    color={sportLeagueToggle === 'nfl' ? 'primary' : 'secondary'}
                    value={sportLeagueToggle}
                    exclusive
                    onChange={handleSportLeagueChange}>
                    <ToggleButton value='nfl'>NFL</ToggleButton>
                    <ToggleButton value='nba'>NBA</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Typography variant="h5" sx={{ textAlign: 'center', mt: 2 }}>
                {getFormattedDate()}
            </Typography>
            <Box sx={{ position: 'relative', mt: 2 }}>
                <Box
                    ref={scrollRef}
                    sx={{
                        overflowX: 'auto',
                        whiteSpace: 'nowrap',
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        },
                    }}>
                    <Stack direction="row" spacing={2} justifyContent={isOverflowing ? 'flex-start' : 'center'}>
                        {scores.map((matchup, index) => (
                            <MatchupCard key={index} matchup={matchup} />
                        ))}
                    </Stack>
                </Box>

                {!atStart && (
                    <ScrollArrow
                        position="left"
                        color="primary"
                        onClick={() =>
                            scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
                        }
                    />
                )}

                {!atEnd && (
                    <ScrollArrow
                        position="right"
                        color="secondary"
                        onClick={() =>
                            scrollRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
                        }
                    />
                )}
            </Box>
        </Stack>
    );
}

export default SportsScores;