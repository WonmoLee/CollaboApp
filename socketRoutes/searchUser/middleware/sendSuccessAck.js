/**
 * Author: wonmoLee 
 * Date: 2022.06.12
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (user, message, ack)=>{
    return new Promise((resolve, reject)=>{
        if(!user) {
            const error = new Error('Not Found User');
            return reject(error);
        };
        message.result = user;
        message.isSuccess = true;
        message.Error = undefined;
        ack(message);
        return resolve();
    });
};