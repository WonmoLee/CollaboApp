const express = require('express');
const router = express.Router();
const UserModel = require('../model/User');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

// 로그인 S
router.post('/login', (req, res, next)=>{
  const {id, password} = req.body;
  if(!id) {
    const error = new Error("Bad request");
    error.status = 400;
    return next(error);
  } else if(!password) {
    const error = new Error("Bad request");
    error.status = 400;
    return next(error);
  }
  return next();
});
router.post('/login', (req, res, next)=>{
  const {id, password} = req.body;
  const OnError = (error)=>{
    return next(error);
  };
  const comparePassword = (user)=>{
    if(!user) {
      const error = new Error('User Not Found');
      error.status = 404;
      return next(error);
    }
    req.SearchUser = user;
    return bcryptjs.compare(password, user.password);
  }
  const compareResultResponse = (isValid)=>{
    if(isValid) {
      return next();
    };
    const error = new Error('Invalid password');
    error.status = 401;
    return next(error);
  };
  UserModel.findOne({id: id}).select({id: 1, password : 1, CreatedAt: 1})
    .then(comparePassword)
    .then(compareResultResponse)
    .catch(OnError);
});
router.post('/login', (req, res, next)=>{
  const options = {
    algorithm: "HS256",
    expiresIn: "10000",
    issuer: "http://127.0.0.1"
  };
  const cert = "secret";
  const plainObject = req.SearchUser.toObject({getters: true});
  jsonwebtoken.sign(plainObject, cert, options, (err,token)=>{
    if(err) {
      return next(err);
    }
    req.CreatedToken = token;
    return next();
  });
});
router.post('/login', (req, res, next)=>{
  const OnError = (error)=>{
    return next(error);
  };
  const updateResultResponse = (updatedUser)=>{
    req.SearchUser = updatedUser;
    return next();
  };
  req.SearchUser.set({token: req.CreatedToken});
  req.SearchUser.save()
    .then(updateResultResponse)
    .catch(OnError)
});
router.post('/login', (req, res, next)=>{
  res.json({token: req.CreatedToken});
});
// 로그인 E

// 회원가입 S
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
  };
  bcryptjs.genSalt(13)
    .then(generateStrictPassword)
    .then(createUser)
    .catch(OnError)
  
})
router.post('/', (req, res, next)=>{
  const OnError = (error)=>{
    return next(error);
  };
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
// 회원가입 E

module.exports = router;