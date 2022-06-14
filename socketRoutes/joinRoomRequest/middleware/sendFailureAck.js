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

module.exports = (error,message,ack)=>{
  console.log(error);
  message.result = message;
  message.isSuccess = false;
  message.Error = error;
  ack(message);
  return Promise.resolve();
};