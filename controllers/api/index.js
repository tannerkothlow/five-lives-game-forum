const router = require('express').Router();
const logoutRoutes = require('./logoutRoutes');

router.use('/logout', logoutRoutes);

module.exports = router;