export const fetchNflScores = async () => {
    const response = await fetch(
        'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard'
    );
    const data = await response.json();

    return extractMatchDetails(data, 'nfl');
};

export const fetchNbaScores = async () => {
    const response = await fetch(
        'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard'
    );
    const data = await response.json();

    return extractMatchDetails(data, 'nba');
};

function extractMatchDetails(scoreboardData, league) {
    return scoreboardData.events.flatMap(event =>
        (event.competitions || []).map(comp => {
            const homeTeam = comp.competitors?.find(team => team.homeAway === 'home');
            const awayTeam = comp.competitors?.find(team => team.homeAway === 'away');

            const homeTeamOverallRecord = homeTeam.records?.find(record => record.type === 'total');
            const awayTeamOverallRecord = awayTeam.records?.find(record => record.type === 'total');

            return {
                league,
                date: event.date,
                home: homeTeam?.team?.name,
                away: awayTeam?.team?.name,
                homeScore: homeTeam?.score,
                awayScore: awayTeam?.score,
                homeTeamOverallRecord: homeTeamOverallRecord?.summary,
                awayTeamOverallRecord: awayTeamOverallRecord?.summary,
                status: event.status,
                weekNumber: league === 'nfl' ? scoreboardData.week.number : 'N/A'
            };
        })
    );
}