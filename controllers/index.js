const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const searchRoutes = require('./searchRoutes');
const registerRoutes = require('./registerRoutes');
const submissionRoutes = require('./submissionRoutes');
const newSubmissionRoutes = require('./newSubmissionRoutes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/search', searchRoutes);
router.use('/register', registerRoutes);
router.use('/submissions', submissionRoutes);
router.use('/new-submission', newSubmissionRoutes);
router.use('/api', apiRoutes);

module.exports = router;