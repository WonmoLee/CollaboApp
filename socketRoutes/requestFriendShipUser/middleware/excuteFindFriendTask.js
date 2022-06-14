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

module.exports = (result)=>{
  return new Promise((resolve,reject)=>{
      result.Task
        .then((friend)=>{
          result.friend = friend;
          return resolve(result);
        })
        .catch((error)=>{
          return reject(error);
        })
  })
};