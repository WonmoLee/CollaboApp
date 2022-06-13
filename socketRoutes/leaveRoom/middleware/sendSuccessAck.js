/**
 * Author: wonmoLee 
 * Date: 2022.06.12
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (result, message, ack)=>{
    message.result = result
    message.isSuccess = true;
    message.Error = undefined;
    ack(message);
    return Promise.resolve();
};