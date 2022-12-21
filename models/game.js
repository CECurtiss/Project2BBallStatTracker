const { Model, DataTypes } = require('sequelize');
const sequelize = require('..config/connection');

class Game extends Model {

}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        season: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        opponent: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        result: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teamPoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        oppPoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "game"
    }
);

module.exports = Game;