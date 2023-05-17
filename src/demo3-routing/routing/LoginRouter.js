const express = require('express')
const router = express.Router();
const LoginCroller = require('../controller/LoginController')


router.get('/login', LoginCroller.login)

module.exports = router