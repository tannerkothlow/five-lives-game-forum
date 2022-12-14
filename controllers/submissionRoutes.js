const router = require('express').Router();
const { User, Post, Comment, Genre } = require('../models');

// GET '/'
// render submissions with passed in object
// if no object get 10 recent submissions

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            limit: 10,
        });
        const posts = postData.map((posts) => posts.get({ plain: true }));
        console.log(posts);

        res.render('submissions', { posts });
    } catch (err) {
        res.status(500).json(err)
    }
});

// GET '/:id'
// get submission by ID
// render one-submission

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'date_created'],
                    include: [
                        {
                            model: User,
                            attributes: ['username'],
                        },
                    ],
                },
            ],
        });

        const post = postData.get({ plain: true });
        res.render('one-submission', { post });
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/by-genre/:genre', async (req, res) => {
    try {
        console.log(req.params.genre);
        const genreID = await Genre.findOne({
            where: {
                name: req.params.genre,
            },
        })
        
        
        const postData = await Post.findAll({
            where: {
                genre_id: genreID.id,
            }
        });
        
        const posts = postData.map((posts) => posts.get({ plain: true }));
        res.render('submissions', { posts });
    } catch (err) {
        res.status(500).json(err)
    }
});

// POST '/:id'
// checks if req.session.logged_in is true before sending the comment, redirects to /login if false
// takes in data from front end and creates a new comment

router.post('/:id', async (req, res) => {
    try {
        const commentData = await Comment.create({
            body: req.body.body,
            user_id: req.session.user_id,
            post_id: Number(req.params.id),
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// PUT
// To implement an edit feature

router.put('/:id', async (req, res) => {
    try {
        const userPost = await Post.findByPk(req.params.id);
        console.log(userPost);
        userPost.update({
            title: req.body.title,
            description: req.body.description,
        });
        res.status(200).json(userPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE
// To implement a delete feature

router.delete('/:id', async (req, res) => {
    try {
        const deletePost = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.status(204).json(deletePost);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
