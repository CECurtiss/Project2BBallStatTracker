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
        date: {
            type: DataTypes.DATE,
            allowNull: false,
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
        homeScore: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        awayScore: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fouls: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        turnovers: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rebounds: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rebounds: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        steals: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        blocks: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        assists: {
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