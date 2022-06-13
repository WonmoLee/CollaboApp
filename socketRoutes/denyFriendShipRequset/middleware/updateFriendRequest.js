/**
 * Author: wonmoLee 
 * Date: 2022.06.13
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

module.exports = (updatedUser, message)=>{
    const User = require('../../../model/User');
    const query = {
        _id: message._id
    };

    const update = {
        $pull: {
            friendRequests: updatedUser._id
        },
    };
    
    const options = {
        new: true
    };
    return User.findOneAndUpdate(query, update, options).exec();
};