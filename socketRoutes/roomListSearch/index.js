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
    const findUser = require('./middleware/findUser');
    const sendSuccessAck = require('./middleware/sendSuccessAck');
    const sendFailureAck = require('./middleware/sendFailureAck');
    
    socket.on(event, (message,ack)=>{
        JWTVerifier.verify(socket, message.token)
            .then((decodedUser)=>{
                return findUser(decodedUser);
            })
            .then((user)=>{
                return sendSuccessAck(socket, message, ack, user);
            })
            .catch((error)=>{
                return sendFailureAck(error, message, ack);
            });
    });
};