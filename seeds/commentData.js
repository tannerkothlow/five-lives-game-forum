const { Comment } = require('../models');

const commentData = [
    {
    comment_text: 'I agree!!!',
    date_created: '12/8/2022',
    user_id: 1,
    post_id: 1,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;