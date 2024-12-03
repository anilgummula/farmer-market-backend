const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../Controllers/UserController');
const { verifyToken } = require('../Middlewares/Auth');

router.get('/', verifyToken, getProfile);
router.put('/update', verifyToken, updateProfile);

module.exports = router;
