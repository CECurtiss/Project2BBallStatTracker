const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Player extends Model {

}

Player.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        game_Id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'game',
                key: 'id',
            },
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rebounds: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        assists: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        steals: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        turnovers: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        blocks: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        personalFouls: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'player'
    }
);

module.exports = Player;