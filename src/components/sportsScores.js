import { useState, useEffect, useRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

const BoxStyled = styled(Box)(({ theme }) => ({
    padding: '8px',
    border: '3px solid #0000',
    borderRadius: '12px',
    background: theme.custom.gradients.aboutMeList,
    animation: '8s rotate linear infinite',
}));

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
    const scrollAmount = 500;

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
        fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const competitions = data.events
                    .flatMap(event => event.competitions || []);

                const matchups = competitions.map(comp => ({
                    home: comp.competitors?.find(team => team.homeAway === 'home')?.team?.name,
                    away: comp.competitors?.find(team => team.homeAway === 'away')?.team?.name,
                    homeScore: comp.competitors?.find(team => team.homeAway === 'home')?.score,
                    awayScore: comp.competitors?.find(team => team.homeAway === 'away')?.score
                }));

                console.log(matchups);
                setNflScores(matchups);
            });
    }, []);

    return (
        <Box sx={{ position: 'relative', width: '80%', mx: 'auto' }}>
            <Box
                ref={scrollRef}
                sx={{
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    }
                }}>
                <Stack direction="row" spacing={2} sx={{ paddingLeft: 2, paddingRight: 2 }}>
                    {nflScores.map((matchup, index) => (
                        <BoxStyled key={index} width={300}>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="body1" sx={{ minWidth: 150 }}>{matchup.away}</Typography>
                                <Typography variant="body1">{matchup.awayScore}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="body1" sx={{ minWidth: 150 }}>{matchup.home}</Typography>
                                <Typography variant="body1">{matchup.homeScore}</Typography>
                            </Box>
                        </BoxStyled>
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
    );
}

export default SportsScores;