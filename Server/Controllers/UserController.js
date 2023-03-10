const { validationResult } = require('express-validator')
const User = require('../Models/UserModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const Register = async(req,res)=>{
    try {
        //extract the validation errors from the req
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(402).json({errors: errors.mapped() })
        }
        //verifier que l'utilisateur n'a pas de compte exixtant
        const {name,email,password,Role} = req.body;
       /*  const isAdmin = await User.findOne({Role:'admin'})
        if(!isAdmin){
            await User.create({email:'admin@gmail.com', password:'123456', Role:'admin'})
        } */
        const found =await  User.findOne({email})
        if(found){
            return res.status(401).json({message:'your email exixt!'})
        }
        //creation user+save in DB
        const salt = bcrypt.genSaltSync(10);//synchrone
        const hashedPassword = await bcrypt.hash(password, salt);//asynchrone
        //2 save user in DB
        const newUser = await User.create({name,email,password:hashedPassword,Role})
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message: error})
    }
}
//login
const login = async(req,res)=>{
    try {
        //extract the validation errors from the req
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(402).json({errors: errors.mapped() })
        }
//verifier l'utilisateur existe ou non
     const {email,password} = req.body;
     const isfound = await User.findOne({email})
     if(!isfound){
        return res.status(402).json({message:'register before'})
     }

     //comparaison de password (in db) avec password(user: req.body)
     const isMatch = await bcrypt.compare(password, isfound.password);
     if(!isMatch){
        return res.status(403).json({message:'wrong password'})
     }

     //generate a key:token
     const token = await jwt.sign({ id: isfound._id }, process.env.SECRET, { expiresIn: '15d' })
     res.status(200).json({isfound,token})

    } catch (error) {
        res.status(500).json({message: error})

    }
}

    const getAllDataUsers = async(req,res)=>{
try {
    const users = await User.find({})
    res.status(200).json(users)
} catch (error) {
    res.status(500).json({message: error})
}
    }



module.exports = {Register,login,getAllDataUsers}