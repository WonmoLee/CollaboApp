/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */
'use strict';


exports.createUser = (req,res,next)=>{
  const UserModel = require('../../../model/User');
  const bcryptjs = require('bcryptjs');
  const {id,password} = req.body;

  console.log(req.body);
  if(!id){
    const error = new Error("Bad Request");
    error.status = 400;
    return next(error);

  }else if(!password){
    const error = new Error("Bad Request");
    error.status = 400;
    return next(error);
  }
  const generateStrictPassword = (salt)=>{
    return bcryptjs.hash(password,salt);
  };
  const createUser = (strictPassword)=>{
    const User = new UserModel({
      id:id,
      password:strictPassword
    });
    req.CreatedUser = User;
    next();
  };
  const OnError = (error)=>{
    return next(error);
  };
  bcryptjs.genSalt(13)
    .then(generateStrictPassword)
    .then(createUser)
    .catch(OnError)

};

exports.saveUser = (req,res,next)=>{

  const OnError = (error)=>{
    return next(error);
  };
  req.CreatedUser.save()
    .then((user)=>{
      req.CreatedUser = user;
      return next();
    })
    .catch(OnError)
};
exports.responseToUser = (req,res,next)=>{
  res.json(req.CreatedUser);
};