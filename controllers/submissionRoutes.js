const router = require('express').Router();
const { User, Post, Comment, Genre } = require('../models');

// GET '/'
// render submissions with passed in object
// if no object get 10 recent submissions

// GET '/:id'
// get submission by ID
// render one-submission

// POST '/:id'
// checks if req.session.logged_in is true before sending the comment, redirects to /login if false
// takes in data from front end and creates a new comment

module.exports = router;
