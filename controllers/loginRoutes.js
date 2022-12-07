const router = require('express').Router();
const { User } = require('../models');

// GET '/'
// render login

router.get('/', async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        res.status(500).json(err)
    }
});

// POST '/'
// checks the entered password and either rejects if doesnt match or redirects to home and logs in

router.post('/', async (req, res) => {
    try {
        // req.body.email
        // req.body.password
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res.status(400).json({ 
                message: 'Incorrect email or password, please try again' 
            });
            return;
        }
        // Passes req password into a helper function that compares it to the stored password.
        const validPassword = userData.checkPassword(req.body.password)

        if (!validPassword) {
            res.status(400).json({ 
                message: 'Incorrect email or password, please try again' 
            });
            return;
        }

        req.session.save(() => {
            // Will save what user is logged in.
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json({ message: 'You are now logged in!' }).redirect('/')
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;