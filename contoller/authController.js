const User = require('../model/userModel');
const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.signup = async (req, res) => {
    try {
        const data = { ...req.body, password};
        const user = await User.findOne(req.params.email);
        if (user) {
            res.status(400).json({message: `user with email: ${user.email} already exists`});
            
        }else{
            const user = await User.create(req.body);
            res.status(201).json({message:"User created successfully"});
        }
    } catch (error) {
        res.json({message: error.message});
    }
    
}

exports.login = async (req, res) => {

}
