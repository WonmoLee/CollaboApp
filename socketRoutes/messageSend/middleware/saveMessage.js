/**
 * Author: wonmoLee 
 * Date: 2022.06.13
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (message, decodedUser)=>{
    const Message = require('../../../model/Message');
    const message = new Message({
        sender: decodedUser._id,
        message: message.message,
        room: message.room
    });
    return messageObject.save();
};