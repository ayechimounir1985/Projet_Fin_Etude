const { validationResult } = require('express-validator')
const User = require('../Models/UserModel')
const bcrypt = require('bcryptjs');


const Register = async(req,res)=>{
    try {
        //extract the validation errors from the req
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(402).json({errors: errors.mapped() })
        }
        //verifier que l'utilisateur n'a pas de compte exixtant
        const {name,email,password} = req.body;
        const found =await  User.find({email})
        if(found){
            return res.status(401).json({message:'your email exixt!'})
        }
        //creation user+save in DB
        const salt = bcrypt.genSaltSync(10);//synchrone
        const hashedPassword = await bcrypt.hash(password, salt);//asynchrone
        //2 save user in DB
        const newUser = User.create({name,email,password:hashedPassword})
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message: error})
    }
}
module.exports = {Register}