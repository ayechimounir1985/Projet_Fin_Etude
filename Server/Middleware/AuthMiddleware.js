require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.AuthMiddlewares = async(req,res,next)=>{
    const token = req.header('token')
    if(!token){
        res.status(400).json({message:'you are not authorised'})
    }
    const decoded = await jwt.verify(token,process.env.SECRET);
    req.userId = decoded._id
    next()
}