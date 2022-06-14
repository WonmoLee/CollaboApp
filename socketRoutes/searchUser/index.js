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

module.exports = (socket, event)=>{
  const Verfier = require('../../util/Verifier');
  const JWTVerifier = new Verfier();
  const findUser = require('./middleware/findUser');
  const sendSuccessAck = require('./middleware/sendSuccessAck');
  const sendFailureAck = require('./middleware/sendFailureAck');
  socket.on(event,(message,ack)=>{

    JWTVerifier.verify(socket,message.token)
      .then(()=>{
        return findUser(message);
      })
      .then((user)=>{
        return sendSuccessAck(user,message,ack);
      })
      .catch((error)=>{
        return sendFailureAck(error,message,ack);
      })
  });
};