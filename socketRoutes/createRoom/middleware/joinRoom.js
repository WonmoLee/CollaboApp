/**
 * Author: wonmoLee 
 * Date: 2022.06.09
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (socket, result)=>{
    socket.join(result.room._id);
    return Promise.resolve(result);
};