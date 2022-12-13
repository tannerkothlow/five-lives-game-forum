const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
            title: {
            type: DataTypes.STRING,
            allowNull: false
        },
            post_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
          }
        },
            post_type: {
              type: DataTypes.STRING,
              allowNull: false
            },
            date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
            genre_id: {
              type: DataTypes.INTEGER,
              references: {
                model: 'genre',
                key: 'id'
              }
            },
            game_id: {
              type: DataTypes.INTEGER,
              references: {
                model: 'game',
                key: 'id'
              }
            },
          
            user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
          }
        }
    },
      {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'post'
      }
);

module.exports = Post;