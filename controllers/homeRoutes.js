const router = require('express').Router();
const { Post, User} = require('../models');

// GET '/'
// render home

router.get('/', async (req, res) => {
    try {
        const reviewData = await Post.findAll({
            limit: 5,
            where: {
                post_type: 'review'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
        });
        const guideData = await Post.findAll({
            limit: 5,
            where: {
                post_type: 'guide'
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
        });

        const reviews = reviewData.map((reviews) => reviews.get({ plain: true }));
        const guides = guideData.map((guides) => guides.get({ plain: true }));

        const content = [reviews, guides];

        res.render('home', { content });
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;