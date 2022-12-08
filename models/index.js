const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Genre = require('./Genre');
const Game = require('./Game');

User.hasMany(Post, {
    foreignkey: 'user_id'
});

Post.belongsTo(User, {
    foreignkey: 'user_id',
    onDelete: 'SET NULL'
});

  Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
  Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

  User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
  Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

  Genre.belongsTo(Post, {
    foreignKey: 'genre_id'
  });

  Game.belongsTo(Post, {
    foreignKey: 'game_id'
  });
  

module.exports = { User, Post, Comment, Genre, Game };