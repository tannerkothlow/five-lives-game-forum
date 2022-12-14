const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Post, Comment, Genre } = require('../models');

// /

router.get('/', withAuth, async (req, res) => {
    const genreData = await Genre.findAll();

        const genres = genreData.map((genres) => genres.get({ plain: true }));
        res.render('newsubmission', { genres });
});

router.post('/', async (req, res) => {
    try {
        const getGenre = await Genre.findOne({
            where: {
                name: req.body.genreName,
            }
        })
        
        const newPost = await Post.create({
            title: req.body.title,
            post_text: req.body.postText,
            post_type: req.body.postType,
            genre_id: getGenre.dataValues.id, 
            game_id: 1,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
