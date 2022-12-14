const { Post } = require('../models');

const postData = [
    {
        title: 'League of Legends',
        post_text: 'Best Moba out there, more comments to come',
        post_type: 'review',
        genre_id: 5,
        game_id: 1,
        user_id: 1
    },
    {
        title: 'The Forest',
        post_text: 'Really fun once you figure out what to do',
        post_type: 'review',
        genre_id: 13,
        game_id: 1,
        user_id: 2
    },
   
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;