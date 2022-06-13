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
        if(!result.friend) {
            return reject(new Error('User Not Found'));
        }
        result.friend.friendReceiveRequests.push(result.User._id);
        result.User.friendRequests.push(result.friend._id);
        result.updateTasks.push(result.friend.save());
        result.updateTasks.push(result.User.save());
        return resolve(result);
    })
};