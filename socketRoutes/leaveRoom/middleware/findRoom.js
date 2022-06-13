/**
 * Author: wonmoLee 
 * Date: 2022.06.13
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (decodedUser, message)=>{
    const Room = require('../../../model/Room');
    return new Promise((resolve, reject)=>{
        Room.findOne({_id: message._id})
            .then((room)=>{
                return resolve({user: decodedUser, room: room})
            })
            .catch((error)=>{
                return reject(error);
            });
    });
};