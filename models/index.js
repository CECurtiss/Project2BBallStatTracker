const Player = require('./player');
const Game = require('./game');

Player.hasMany(Game, {
    foreignKey: 'game_id'
});

Game.belongsToMany(Player, {
    foreignKey: 'game_id',
})

module.exports = { Player, Game };