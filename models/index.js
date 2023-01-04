const Player = require('./player');
const Game = require('./game');
const Playerbio = require('./playerbio');

Player.hasMany(Game, {
    foreignKey: 'game_id'
});

Game.belongsTo(Player, {
    foreignKey: 'game_id',
})

Playerbio.belongsTo(Player, {
    foreignKey: 'player_id',
})

Player.hasOne(Playerbio, {
    foreignKey: 'player_id',
})

module.exports = { Player, Game };