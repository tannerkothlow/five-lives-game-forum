const router = require('express').Router();
const { Post, Genre, User } = require('../models');

// GET '/'
// Finds all genre
// Render search 
router.get('/', async (req, res) => {
    try {
        const genreData = await Genre.findAll();

        const genres = genreData.map((genres) => genres.get({ plain: true }));
        res.render('search', { genres });
    } catch (err){
        res.status(500).json(err);
    }
});

// POST '/'
// Can:
// Look for submissions with a matching title
// Look for all submissions with a certain genre
// Look for all submissions that are reviews, guides, or either
// Redirects if it finds something, displays a message if nothing

router.post('/', async (req, res) => {
    try{
        // If searching by title
            console.log(req.body.searchTitle);

            const postData = await Post.findAll({
                where: {
                    title: req.body.searchTitle
                }
            });

            if (!postData.length) {
                res.status(400).json({ message: 'No submissions found with that title!' });
                return;
            }

            const posts = postData.map((posts) => posts.get({ plain: true }));

            console.log(posts);

            // Temp solution until redirects to submissions
            res.status(200).json(posts);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;