const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../Controllers/UserController');
const { ensureAuthenticated } = require('../Middlewares/Auth');

router.get('/', ensureAuthenticated, getProfile);
router.put('/update', ensureAuthenticated, updateProfile);

module.exports = router;
