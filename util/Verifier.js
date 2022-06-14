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

function Verifier() {
  if(!(this instanceof Verifier)){
    throw new Error('muse be created with new keyword');
  }
}

Verifier.prototype.verify = function (socket, token) {
  const jsonwebtoken = require('jsonwebtoken');
  const cert = 'secret';
  return new Promise((resolve,reject)=>{
    jsonwebtoken.verify(token,cert,(err,decodedUser)=>{
      if(err){
        if(err.name === 'TokenExpiredError'){
          socket.isExistNewToken = true;
          socket.emit('tokenRefresh-Required');
          return reject(err);
        }else{
          return reject(err);
        }
      }
      return resolve(decodedUser);
    });
  });
};

module.exports=Verifier;