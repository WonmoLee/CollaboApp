/**
 * Author: wonmoLee 
 * Date: 2022.06.13
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

 module.exports = (socket, event)=>{
    const Verifier = require('../../util/Verifier');
    const JWTVerifier = new Verifier();
    const findTargetUser = require('./middleware/findTargetUser');
    const pushUserToRoom = require('./middleware/pushUserToRoom');
    const sendMessageToTargetUser = require('./middleware/sendMesaageToTargetUser');
    const sendSuccessAck = require('./middleware/sendSuccessAck');
    const sendFailureAck = require('./middleware/sendFailureAck');
    
    socket.on(event, (message,ack)=>{
        JWTVerifier.verify(socket, message.token)
            .then((decodedUser)=>{
                return findTargetUser(decodedUser, message);
            })
            .then((result)=>{
                return pushUserToRoom(result, message);
            })
            .then((result)=>{
                return sendMessageToTargetUser(result, io);
            })
            .then((result)=>{
                return sendSuccessAck(result, message, ack);
            })
            .catch((error)=>{
                return sendFailureAck(error, message, ack);
            });
    });
};