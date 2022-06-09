const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const io = require('socket.io')();
const headerPrinter = require('./headerPrinter');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
//const { Socket } = require('dgram');
const mongoose = require('mongoose');
const Initializer = require('./init/initializer');
const app = express();
Initializer.InitMongoDB(process.env, mongoose);
app.io = io;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(headerPrinter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

io.use((socket, next)=>{
  const token = socket.handshake.query.token;
  console.log(`token is ${token}`);
  if(token !== 'wonmoLee'){
    return next(new Error('Unauthorized'));
  }
  next();
});
io.on('connection', (socket)=>{
  socket.on('hello', (message)=>{
    console.log(message);
  });
  socket.on('disconnect', (err)=>{
    console.log(err);
  });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
