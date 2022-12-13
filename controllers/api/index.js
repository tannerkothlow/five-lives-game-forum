const router = require('express').Router();
const logoutRoutes = require('./logoutRoutes');
const genreRoutes = require('./genreRoutes')

router.use('/logout', logoutRoutes);
router.use('/genre', genreRoutes);

module.exports = router;