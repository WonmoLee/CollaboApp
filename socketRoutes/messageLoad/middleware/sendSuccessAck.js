/**
 * Author: wonmoLee 
 * Date: 2022.06.12
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (room, message, ack)=>{
    message.result = room.messages;
    message.isSuccess = true;
    message.Error = undefined;
    ack(message);
    return Promise.resolve();
};