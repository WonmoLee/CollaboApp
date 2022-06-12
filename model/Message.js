/**
 * Author: wonmoLee 
 * Date: 2022.06.12
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

 let mongoose = require('mongoose');
 let Schema = mongoose.Schema;
 
 let MessageSchema = new Schema({
     message: {type: String, required: true},
     sender: {type: Schema.Tpyes.ObjectId, ref: 'User'},
     receiver: [{type: Schema.Types.ObjectId, ref: 'User'}],
     room: {type: Schema.Tpyes.ObjectId, ref: 'Room'},
     CreatedAt:{type: Date, default: Date.now}
 });
 
 module.exports = mongoose.model('Message', MessageSchema);