/**
 * Author: wonmoLee 
 * Date: 2022.06.12
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

exports.validateParameter = (req, res, next)=>{
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
};

exports.comparePassword = (req, res, next)=>{
    const UserModel = require('../../../model/User');
    const bcryptjs = require('bcryptjs');
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
};

exports.createJsonWebToken = (req, res, next)=>{
    const jsonwebtoken = require('jsonwebtoken');
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
};

exports.updateUserWithToekn = (req, res, next)=>{
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
      .catch(OnError);
};

exports.responseToUser = (req, res, next)=>{
    res.json({token: req.CreatedToken});
};