export const fetchNflScores = async () => {
    const response = await fetch(
        'http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard'
    );
    const data = await response.json();

    const competitions = data.events.flatMap(event => event.competitions || []);

    return competitions.map(comp => ({
        home: comp.competitors?.find(team => team.homeAway === 'home')?.team?.name,
        away: comp.competitors?.find(team => team.homeAway === 'away')?.team?.name,
        homeScore: comp.competitors?.find(team => team.homeAway === 'home')?.score,
        awayScore: comp.competitors?.find(team => team.homeAway === 'away')?.score,
    }));
};

export const fetchNbaScores = async () => {
    const response = await fetch(
        'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard'
    );
    const data = await response.json();

    const competitions = data.events.flatMap(event => event.competitions || []);

    return competitions.map(comp => ({
        home: comp.competitors?.find(team => team.homeAway === 'home')?.team?.name,
        away: comp.competitors?.find(team => team.homeAway === 'away')?.team?.name,
        homeScore: comp.competitors?.find(team => team.homeAway === 'home')?.score,
        awayScore: comp.competitors?.find(team => team.homeAway === 'away')?.score,
    }));
};