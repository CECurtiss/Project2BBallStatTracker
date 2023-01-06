const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Playerbio extends Model {

}

Playerbio.init(
    {
        player_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'playerstats',
                key: 'id',
            }
        },
        name: {
           type: DataTypes.STRING,
           allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        height: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        college: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'playerbio'
    }
);

module.exports = Playerbio;