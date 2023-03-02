const express = require('express')
const router = express.Router()
const UserContoller = require('../Controllers/UserController')
const {body} = require('express-validator')

router.post('/',body('email','insert a valid Email').isEmail(),body('password','password should be at least 6').isLength({min:6}),UserContoller.Register )

module.exports = router