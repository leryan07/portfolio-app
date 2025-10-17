import { useState, useEffect, useRef } from 'react';
import { Box, Stack } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { fetchNflScores } from '../api/espnAPI';
import { MatchupCard } from './matchupCard';
import { useScrollPosition, useIsOverflowing } from '../hooks/scrollingHooks';
import { ScrollArrow } from './scrollArrow';

function SportsScores() {
    const [nflScores, setNflScores] = useState([]);

    const scrollRef = useRef(null);
    const { atStart, atEnd } = useScrollPosition(scrollRef, [nflScores]);
    const scrollAmount = 700;

    const isOverflowing = useIsOverflowing(scrollRef, [nflScores]);

    useEffect(() => {
        fetchNflScores().then(scores => setNflScores(scores));
    }, []);

    return (
        <Stack sx={{ position: 'relative', mx: 'auto' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ToggleButtonGroup exclusive>
                    <ToggleButton value='nfl' selected>NFL</ToggleButton>
                    <ToggleButton value='nba'>NBA</ToggleButton>
                </ToggleButtonGroup>
            </Box>
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
                        {nflScores.map((matchup, index) => (
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