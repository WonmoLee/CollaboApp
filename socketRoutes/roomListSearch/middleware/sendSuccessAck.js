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

module.exports = (socket,message,ack,user)=>{
  user.rooms.forEach((room)=>{
    socket.join(room._id);
  });
  message.result = user.rooms;
  message.isSuccess = true;
  message.Error = undefined;
  ack(message);
  return Promise.resolve();

};