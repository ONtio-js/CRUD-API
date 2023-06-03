const express = require('express');
const authController = require('../contoller/authController');
const authRouter = express.Router();


authRouter.post('/auth/signup',authController.signup)
authRouter.post('/auth/login',authController.login);

module.exports = authRouter;