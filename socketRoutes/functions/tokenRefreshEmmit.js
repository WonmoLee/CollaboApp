/**
 * Author: wonmoLee 
 * Date: 2022.06.12
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (socket)=>{
    if(socket.isExistNewToken) {
        socket.emit('tokenRefresh-Required');
    }
    return true;
}