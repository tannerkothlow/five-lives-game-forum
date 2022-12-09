const { Post } = require('../models');

const postData = [
    {
        title: 'League of Legends',
        post_text: 'Best Moba out there, more comments to come',
        post_type: 'review',
        date_created: '12/8/2022',
        genre_id: 'Multiplayer online battle arena (MOBA)',
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;