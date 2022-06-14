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
const express = require('express');
const router = express.Router();

const login = require('./middleware/user/login');
const signIn = require('./middleware/user/signIn');
const token = require('./middleware/user/token');
//const logout = require('./middleware/user/logout');

router.post('/',signIn.createUser,signIn.saveUser,signIn.responseToUser);
router.post('/login',login.validateParameter,login.comparePassword,login.createJsonWebToken,login.updateUserWithToken,login.responseToUser);
//router.get('/logout', logout.validateParameter);
router.get('/token',token.validateParameter,token.verfyToken,token.findUser,token.createToken,token.responseToUser);

module.exports = router;
