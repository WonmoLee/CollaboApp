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

let RoomSchema = new Schema({
  roomName:{type:String,required:true},
  participants:[{type:Schema.Types.ObjectId,ref:'User'}],
  messages:[{type:Schema.Types.ObjectId, ref:'Message'}],
  CreatedAt:{type:Date,default:Date.now},
  UpdatedAt:{type:Date,default:Date.now}
});


RoomSchema.index({ messages: -1});
module.exports = mongoose.model('Room',RoomSchema);