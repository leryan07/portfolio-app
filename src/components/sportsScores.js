import { useState, useEffect, useRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { fetchNflScores, fetchNbaScores } from '../api/espnAPI';
import { MatchupCard } from './matchupCard';
import { useScrollPosition, useIsOverflowing } from '../hooks/scrollingHooks';
import { ScrollArrow } from './scrollArrow';
import { getFormattedDate } from '../utils/dateUtil';

function SportsScores() {
    const [scores, setScores] = useState([]);
    const [sportLeagueToggle, setSportLeagueToggle] = useState('myTeams');

    const handleSportLeagueChange = (event, newLeague) => {
        if (newLeague !== null) {
            setSportLeagueToggle(newLeague);
        }
    };

    const scrollRef = useRef(null);
    const { atStart, atEnd } = useScrollPosition(scrollRef, [scores]);
    const scrollAmount = 700;

    const isOverflowing = useIsOverflowing(scrollRef, [scores]);

    const isInitialLoad = useRef(true);

    const loadMyScores = async () => {
        try {
            const nflScores = await fetchNflScores();
            const nbaScores = await fetchNbaScores();

            const myScores = [];

            nflScores.forEach(score => {
                if (score.home?.toLowerCase() === "colts" || score.away?.toLowerCase() === "colts") {
                    myScores.push(score);
                }
            });

            nbaScores.forEach(score => {
                if (score.home?.toLowerCase() === "pacers" || score.away?.toLowerCase() === "pacers") {
                    myScores.push(score);
                }
            });

            setScores(myScores);
        } catch (err) {
            console.log(err)
        }
    };

    const loadScores = () => {
        switch (sportLeagueToggle) {
            case 'myTeams':
                loadMyScores();
                break;
            case 'nfl':
                fetchNflScores().then(setScores);
                break;
            case 'nba':
                fetchNbaScores().then(setScores);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (isInitialLoad.current) {
            isInitialLoad.current = false;
            loadMyScores();
            return;
        }

        loadScores(false);
    }, [sportLeagueToggle]);

    useEffect(() => {
        const interval = setInterval(() => {
            loadScores(true);
        }, 15000);

        return () => clearInterval(interval);
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
                    <ToggleButton value='myTeams'
                        sx={{
                            '&.Mui-selected': {
                                backgroundColor: 'rgba(255, 165, 0, 0.08)',
                                color: '#5D3FD3'
                            },
                            '&.Mui-selected:hover': {
                                backgroundColor: 'rgba(255, 165, 0, 0.12)'
                            }
                        }}>
                        My Teams
                    </ToggleButton>
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