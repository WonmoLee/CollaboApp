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

module.exports = (decodedUser)=>{
  const User = require('../../../model/User');
  return new Promise((resolve,reject)=>{
    User.findOne({_id:decodedUser._id}).populate('friendReceiveRequests')
      .then((user)=>{
        if(!user)return reject(new Error('User Not Found'));
        return resolve(user);
      })
      .catch((error)=>{
        return reject(error);
      })
  });
};