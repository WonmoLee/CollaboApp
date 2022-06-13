/**
 * Author: wonmoLee 
 * Date: 2022.06.12
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

 module.exports = (error, message, ack)=>{
    console.log(error);
    message.result = [];
    message.isSuccess = false;
    message.Error = error;
    ack(message);
    return Promise.resolve();
};