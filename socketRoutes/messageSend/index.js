/**
 * Author: wonmoLee 
 * Date: 2022.06.13
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (io, socket, event)=>{
    const Verifier = require('../../util/Verifier');
    const JWTVerifier = new Verifier();
    const saveMessage = require('./middleware/saveMessage');
    const populateMessage = require('./middleware/populateMessage');
    const pushMessageToRoom = require('./middleware/pushMessageToRoom');
    const broadcastMessage = require('./middleware/broadcastMessage');
    const sendSuccessAck = require('./middleware/sendSuccessAck');
    const sendFailureAck = require('./middleware/sendFailureAck');

    socket.on(event, (message,ack)=>{
        JWTVerifier.verify(socket, message.token)
            .then((decodedUser)=>{
                return saveMessage(message, decodedUser);
            })
            .then((messageObject)=>{
                return populateMessage(messageObject);
            })
            .then((messageObject)=>{
                return pushMessageToRoom(messageObject);
            })
            .then((messageObject)=>{
                return broadcastMessage(messageObject, io);
            })
            .then((messageObject)=>{
                return sendSuccessAck(messageObject, message, ack);
            })
            .catch((error)=>{
                return sendFailureAck(error, message, ack);
            });
    });
};