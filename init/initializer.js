/**
 * Author: wonmoLee 
 * Date: 2022.05.31
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

 const { options } = require("mongoose");

 exports.InitMongoDB = (env, mongoose)=>{
     if(env.VCAP_SERVICES) {
         /**
          * Cluod 환경
          */
     } else {
         /**
          * Local
          * 
          * mongodb+srv://admin:<password>@omop.egtb2.mongodb.net/?retryWrites=true&w=majority
          */
         const connectURL = 'mongodb+srv://admin:bae12345@omop.egtb2.mongodb.net/?retryWrites=true&w=majority';
         const options = {
             connectTimeoutMS: 4000,
             keepAlive: true,
             ha: true,
             autoReconnect: true,
             reconnectTries: 30
         };
         mongoose.connect(connectURL, options);
         const db = mongoose.connection;
         db.on('open', ()=>{
             console.log('connected');
         });
     }
 } 