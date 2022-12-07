const router = require('express').Router();
const { Post, Genre } = require('../models');

// GET '/'
// Finds all genre
// Render search 

// POST '/'
// Can:
// Look for submissions with a matching title
// Look for all submissions with a certain genre
// Look for all submissions that are reviews, guides, or either
// Redirects if it finds something, displays a message if nothing

module.exports = router;