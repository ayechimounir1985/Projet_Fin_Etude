const express = require('express')
const router = express.Router()
const UserContoller = require('../Controllers/UserController')
const { AuthMiddlewares } = require('../Middleware/AuthMiddleware')
const { DataValidation } = require('../Middleware/DataValidation')

router.post('/',DataValidation,UserContoller.Register )
router.post('/login',DataValidation,UserContoller.login )
router.get('/',AuthMiddlewares,UserContoller.getAllDataUsers )


module.exports = router