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
  return User.findOne({_id:decodedUser._id}).populate('friends');
};