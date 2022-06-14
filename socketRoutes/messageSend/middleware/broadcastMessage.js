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

module.exports = (messageObject,socket)=>{
  console.log(messageObject);

  socket.in(messageObject.room).emit('broadcastMessage',messageObject);
  return Promise.resolve(messageObject);
};