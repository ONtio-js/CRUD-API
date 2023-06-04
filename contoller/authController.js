const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

exports.signup = async (req, res) => {
    try {
        const password =  await bcrypt.hash(req.body.password,saltRounds);
        const data = {...req.body, password}
        const user = await User.findOne({email: req.body.email});
        if (user) {
            res.status(400).json({message: `user with email: ${user.email} already exists`});
            return;
        }else{
            const user = await User.create(data);
            res.status(201).json({message:"User created successfully"});
            return;
        }
    } catch (error) {
        res.status(500).json({message: error.message});
        return;
    }
    
}

exports.login = async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
            res.status(404).json({message:`User with ${req.body.email}not found`});
            return;
        }
        if(!(await bcrypt.compare(req.body.password,user.password))){
            res.status(403).json({message:`incorrect password`});
            return;
        }
        const token = jwt.sign({user},"fake-jwt-token");
        res.status(200).json({user, access_token: token});
    } catch(error) {
        res.status(500).send({message: error.message});
    }
}
