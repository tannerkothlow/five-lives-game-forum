const { Post } = require('../models');

const postData = [
    {
        title: 'League of Legends',
        post_text: 'Best Moba out there, more comments to come',
        post_type: 'review',
        genre_id: 'Multiplayer online battle arena (MOBA)',
        user_id: 1
    },
    {
        title: 'The Forest',
        post_text: 'Really fun once you figure out what to do',
        post_type: 'review',
        genre_id: 'Survival and horror',
        user_id: 2
    },
   
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;