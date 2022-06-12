/**
 * Author: wonmoLee 
 * Date: 2022.06.09
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (User, socket)=>{
    User.rooms.forEach((room)=>{
        socket.join(room._id);
    });
};