/**
 * Author: wonmoLee 
 * Date: 2022.06.13
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (messageObject)=>{
    const Room = require('../../../model/Room');
    const query = {
        _id: messageObject.room
    };
    const update = {
        $push: {
            message: messageObject._id
        }
    };
    const options = {
        new: true
    };
    return new Promise((resolve, reject)=>{
        Room.findOneAndUpdate(query, update, options).exec()
            .then(()=>{
                return resolve(messageObject);
            })
            .catch((error)=>{
                return reject(error);
            });
    });
};