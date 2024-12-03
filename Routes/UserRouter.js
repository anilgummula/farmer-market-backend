const router = require('express').Router();
const UserController = require('../Controllers/UserController');
const { getProfile, updateProfile } = UserController;
const { ensureAuthenticated } = require('../Middlewares/Auth');

router.get('/view', ensureAuthenticated, getProfile);
router.put('/update', ensureAuthenticated, updateProfile);

module.exports = router;
