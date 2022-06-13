/**
 * Author: wonmoLee 
 * Date: 2022.06.12
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (decodedUser, message)=>{
    const User = require('../../../model/User');
    return new Promise((resolve, reject)=>{
        User.findOne({id: message.id})
            .then((user)=>{
                return resolve({targetUser: user, sender: decodedUser});
            })
            .catch((error)=>{
                return reject(error);
            });
    });
};