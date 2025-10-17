import { useState, useEffect, useRef } from 'react';
import { Box, Stack } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { fetchNflScores } from '../api/espnAPI';
import { MatchupCard } from './matchupCard';

const ScrollArrow = ({ position, color, onClick }) => {
    const Icon = position === 'left' ? ArrowBack : ArrowForward;

    return (
        <IconButton
            sx={{
                position: 'absolute',
                top: '50%',
                [position]: 0,
                transform: 'translateY(-50%)',
                backgroundColor: `${color}.main`,
                color: `${color}.contrastText`,
                boxShadow: 1,
                zIndex: 1,
                '&:hover': {
                    backgroundColor: `${color}.dark`
                }
            }}
            onClick={onClick}
        >
            <Icon />
        </IconButton>
    );
};

function SportsScores() {
    const [nflScores, setNflScores] = useState([]);

    const scrollRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const scrollAmount = 700;

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;

        setAtStart(el.scrollLeft <= 1);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            checkScroll();
            el.addEventListener('scroll', checkScroll);
            return () => el.removeEventListener('scroll', checkScroll);
        }
    }, [nflScores]);

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
                    <Stack direction="row" spacing={2}>
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