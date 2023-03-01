const express = require('express')
const router = express.Router()
const UserContoller = require('../Controllers/UserController')

router.post('/',UserContoller.Register )

module.exports = router