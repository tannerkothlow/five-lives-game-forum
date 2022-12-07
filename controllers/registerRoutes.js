const router = require('express').Router();
const { User } = require('../models');

// GET '/'
// render register

// POST '/'
// new user object, search to see if any user has been created with that email before.
// adds logged_in to session

module.exports = router;