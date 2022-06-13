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
    const updateMyFriend = require('./middleware/updateMyFriend');
    const removeme = require('./middleware/removeme');
    const sendSuccessAck = require('./middleware/sendSuccessAck');
    const sendFailureAck = require('./middleware/sendFailureAck');

    socket.on(event, (message,ack)=>{
        JWTVerifier.verify(socket, message.token)
            .then((decodedUser)=>{
                return updateMyFriend(decodedUser, message);
            })
            .then((updatedUser)=>{
                return removeme(updatedUser, message);
            })
            .then((result)=>{
                return sendSuccessAck(result, message, ack);
            })
            .catch((error)=>{
                return sendFailureAck(error, message, ack);
            });
    });
};