const jwt = require('jsonwebtoken');
const {objectId} = require('mongodb');
const User = require('../model/userModel');


const auth = async (req, res, next) => {
 
  try {
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[1]){
        const token = req.headers.authorization.split(' ')[1];
        await jwt.verify(token,"fake-jwt-token", async (error, decode) => {
            if(error) throw error;
            const user = await User.findOne({_id: decode.user._id});
            if(!user) return;
            
        });
      }else{
        res.status(401).json({message:"unauthorized"});
        return;
      }
  } catch (error) {
    res.status(500).json({message:error.message});
    return;
  }
  next();
}

module.exports = auth;