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
    const updateReceiveRequest = require('./middleware/updateReceiveRequest');
    const updateFriendRequest = require('./middleware/updateFriendRequest');
    const sendSuccessAck = require('./middleware/sendSuccessAck');
    const sendFailureAck = require('./middleware/sendFailureAck');

    socket.on(event, (message,ack)=>{
        JWTVerifier.verify(socket, message.token)
            .then((decodedUser)=>{
                return updateReceiveRequest(decodedUser);
            })
            .then((result)=>{
                return updateFriendRequest(result, message);
            })
            .then((result)=>{
                return sendSuccessAck(result, message, ack);
            })
            .catch((error)=>{
                return sendFailureAck(error, message, ack);
            });
    });
};