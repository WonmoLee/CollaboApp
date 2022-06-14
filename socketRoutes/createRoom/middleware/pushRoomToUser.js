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

module.exports = (result)=>{
  const User = require('../../../model/User');
  const query = {
    _id:result.user._id
  };
  const update = {
    $push:{
      rooms:result.room._id
    }
  };
  const options = {
    new :true
  };

  return new Promise((resolve,reject)=>{
    User.findOneAndUpdate(query,update,options).exec()
      .then((user)=>{
        result.user = user;
        return resolve(result);
      })
      .catch((error)=>{
        return reject(error);
      })
  });
};