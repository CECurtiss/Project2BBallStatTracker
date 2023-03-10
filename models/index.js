const PlayerStats = require('./playerstats');
const Game = require('./game');
const Playerbio = require('./playerbio');
const User = require('./User')

PlayerStats.hasMany(Game, {
    foreignKey: 'gameId'
});

Game.belongsTo(PlayerStats, {
    foreignKey: 'gameId',
})

Playerbio.belongsTo(PlayerStats, {
    foreignKey: 'player_id',
})

PlayerStats.hasOne(Playerbio, {
    foreignKey: 'player_id',
})

module.exports = { PlayerStats, Game, User, Playerbio };