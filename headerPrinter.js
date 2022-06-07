/**
 * Author: wonmoLee 
 * Date: 2022.06.07
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = function(req, res, next) {
    console.log(req.headers);
    next();
}