/**
 * Author: wonmoLee 
 * Date: 2022.06.13
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (messageObject, io)=>{
    io.in(messageObject.room).emit('broadcastMessage', messageObject);
    return Promise.resolve(messageObject);
};