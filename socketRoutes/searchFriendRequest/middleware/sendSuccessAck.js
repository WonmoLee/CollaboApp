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
  message.result = user.friendReceiveRequests;
  message.isSuccess = true;
  message.Error = undefined;
  ack(message);
  return Promise.resolve();

};