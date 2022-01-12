const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/AuthController');

router.post('/login', authController.postLogin);
router.post('/register', authController.postRegister);

module.exports = router;