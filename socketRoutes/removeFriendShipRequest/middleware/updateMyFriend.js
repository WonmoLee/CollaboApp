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

module.exports = (decodedUser,message)=>{
  const User = require('../../../model/User');
  const query = {
    _id:decodedUser._id
  };
  const update = {
    $pull:{
      friends:message._id
    }
  };
  const options = {
    new : true
  };
  return User.findOneAndUpdate(query,update,options).exec();
};