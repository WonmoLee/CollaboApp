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

module.exports = (message,socket)=>{
  return new Promise((resolve,reject)=>{
    if(!message)return reject(new Error('Invalid Message'));
    socket.join(message.room._id);
    return resolve(message);
  });
};