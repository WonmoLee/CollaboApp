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

module.exports = (message,decodedUser)=>{
  const Message = require('../../../model/Message');
  const messageObjet = new Message({
    sender:decodedUser._id,
    message:message.message,
    room:message.room
  });
  return messageObjet.save();
};