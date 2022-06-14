/**
 * Author: wonmoLee 
 * Date: 2022.06.12
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

 module.exports = (socket, next)=>{
    const User = require('../../model/User');
    const jsonwebtoken = require('jsonwebtoken');
    const token = socket.handshake.query.token;
    const cert = "secret";
    console.log(`token is ${token}`);
    jsonwebtoken.verify(token, cert, (err, decodedUser)=>{
        if(err) {
            if(err.name === 'TokenExpiredError') {
                socket.isExistNewToken = true;
                return next();
            } else {
                return newt(new Error('Unauthorized'));
            };
        };
        User.findOne({id: decodedUser.id})
            .then((user)=>{
                if(!user) {
                    return next(new Error('Unauthorized'));
                }
                user.token === token ? next() : next(new Error('Unauthorized'));
                return;
            })
            .catch((error) => {
                return next(new Error('Unauthorized'));
            });
        next();
    });
};