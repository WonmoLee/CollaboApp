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

module.exports = (socket)=>{
  if(socket.isExistNewToken){
    socket.emit('tokenRefresh-Required');
  }
  return true;
};