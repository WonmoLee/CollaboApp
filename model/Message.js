/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */
'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MessageSchema = new Schema({
  message:{type:String,required:true},
  sender:{type:Schema.Types.ObjectId,ref:'User'},
  receiver:[{type:Schema.Types.ObjectId, ref:'User'}],
  room:{type:Schema.Types.ObjectId,ref:'Room'},
  CreatedAt:{type:Date,default:Date.now}
});

MessageSchema.index({ CreatedAt: 1});
module.exports = mongoose.model('Message',MessageSchema);