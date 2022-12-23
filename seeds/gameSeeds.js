const { game } = require('../models');

const gameData = [
    {
        date: "2021-06-01",
        homeTeam: "Lakers",
        awayTeam: "Nets",
        homeScore: 125,
        awayScore: 115,
        fouls: 20,
        turnovers: 15,
        rebounds: 50,
        steals: 10,
        blocks: 5,
        assists: 30,
    },
    {
        date: "2021-06-02",
        homeTeam: "Lakers",
        awayTeam: "Nets",
        homeScore: 115,
        awayScore: 105,
        fouls: 10,
        turnovers: 5,
        rebounds: 40,
        steals: 20,
        blocks: 15,
        assists: 40,
    },
    {
        date: "2021-06-03",
        homeTeam: "Lakers",
        awayTeam: "Nets",
        homeScore: 105,
        awayScore: 95,
        fouls: 15,
        turnovers: 10,
        rebounds: 45,
        steals: 15,
        blocks: 10,
        assists: 35,
    },
    {
        date: "2021-06-04",
        homeTeam: "Lakers",
        awayTeam: "Nets",
        homeScore: 95,
        awayScore: 85,
        fouls: 20,
        turnovers: 15,
        rebounds: 50,
        steals: 10,
        blocks: 5,
        assists: 30,
    }

];

const seedGames = () => game.bulkCreate(gameData);
module.exports = seedGames;