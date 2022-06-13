/**
 * Author: wonmoLee 
 * Date: 2022.06.13
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (result)=>{
    return new Promise((resolve, reject)=>{
        result.Task
            .then((friend)=>{
                result.friend = friend;
                return resolve(result);
            })
            .catch((error)=>{
                return reject(error);
            });
    });
};