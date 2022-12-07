const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Genre extends Model{}

Genre.init(
    {
            id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
            name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
            description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
            post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'genre',
      }
)

module.exports = Genre;

