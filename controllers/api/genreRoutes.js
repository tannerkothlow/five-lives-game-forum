const router = require('express').Router();
const { Genre } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const genreData = await Genre.findAll();
        const genres = genreData.map((genres) => genres.get({ plain: true }));

        res.status(200).json(genres);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        // req.body.name
        // req.body.description
        const newGenre = await Genre.create({
            name: req.body.name,
            description: req.body.description,
        });
        res.status(200).json(newGenre)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;