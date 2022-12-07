const router = require('express').Router();
const { Post } = require('../models');

// GET '/'
// render newsubmission
// if req.session.logged_in is not true, redirects to login

// POST '/'
// takes in information from the app and creates a new post, redirects to submissions/:id of that post afterwards

module.exports = router;