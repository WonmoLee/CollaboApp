const express = require('express');
const router = express.Router();
const UserModel = require('../model/User');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
router.post('/login', (req, res, next)=>{
  const {id, password} = req.body;
  if(id !== 'wonmoLee') {
    const error = new Error("User Not Found");
    error.status = 404;
    return next(error);
  } else if(password !== '1234') {
    const error = new Error("User Not Found");
    error.status = 401;
    return next(error);
  }
  next();
}, (req, res, next)=>{
  res.json({message: "LoggedIn Success"});
});

router.post('/login', (req, res, next)=>{
  res.json({message: "LoggedIn Success"});
});

router.post('/', (req, res,next)=>{
  const {id, password} = req.body;
  if(!id) {
    const error = new Error("Bad Request");
    error.status = 400;
    return next(error);
  } else if(!password) {
    const error = new Error("Bad Request");
    error.status = 400;
    return next(error);
  }
  
  const generateStrictPassword = (salt)=>{
    return bcryptjs.hash(password, salt);
  };
  const createUser = (strictPassword)=>{
    const User = new UserModel({
      id: id,
      password: strictPassword
    });
    req.CreatedUser = User;
    next();
  }
  const OnError = (error)=>{
    return next(error);
  }
  bcryptjs.genSalt(13)
    .then(generateStrictPassword)
    .then(createUser)
    .catch(OnError)
  
})
router.post('/', (req, res, next)=>{
  const OnError = (error)=>{
    return next(error);
  }
  req.CreatedUser.save()
    .then((user)=>{
      req.CreatedUser = user;
      return next();
    })
    .catch(OnError)
});
router.post('/', (req, res, next)=>{
  res.json(req.CreatedUser);
});

module.exports = router;