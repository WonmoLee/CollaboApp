/**
 * Author: wonmoLee 
 * Date: 2022.06.13
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (message)=>{
    const Room = require('../../../model/Room');
    const count = 30;
    const start = message.page * count;
    return Room.findOne({_id: message._id})
        .skip(start).limit(count)
        .populate({
            path: messages,
            populate: {
                path: 'sender',
                model: 'User'
            }
        });
};