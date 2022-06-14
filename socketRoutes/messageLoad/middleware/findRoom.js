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

module.exports = (message)=>{
  const Room = require('../../../model/Room');
  return Room.findOne({_id:message._id})
    .populate({
      path:'messages',
      populate:{
        path:'sender',
        model:'User'
      }
    })
  // return Room.findOne({_id:message._id})
  //   .populate({
  //     path:'messages',
  //     populate:{
  //       path:'sender',
  //       model:'User'
  //     }
  //   })
  //
  // return Room.findOne({_id:message._id})
  //   .populate({
  //     path:'messages',
  //     options: {
  //       sort: 'CreatedAt'
  //     },
  //     populate:{
  //       path:'sender',
  //       model:'User'
  //     }
  //   })
  //   .where('messages')
  //   .slice(start,count)
};