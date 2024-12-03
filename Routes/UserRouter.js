const router = require('express').Router();
const { getProfile, updateProfile } = require('../Controllers/UserController');
const { ensureAuthenticated } = require('../Middlewares/Auth');

router.get('/view', ensureAuthenticated, getProfile);
router.put('/update', ensureAuthenticated, updateProfile);

module.exports = router;
