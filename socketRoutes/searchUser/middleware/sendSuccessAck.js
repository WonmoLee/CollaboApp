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

module.exports = (user,message,ack)=>{
  return new Promise((resolve,reject)=>{
    if(!user){
      const error = new Error('Not Found User');
      return reject(error);
    }
    message.result = user;
    message.isSuccess = true;
    message.Error = undefined;
    ack(message);
    return resolve();
  });
};