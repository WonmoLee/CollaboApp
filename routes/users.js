var express = require('express');
var router = express.Router();

router.post('/login', (req, res, next)=>{
  const {id, password} = req.body;
  if(id !== 'wonmoLee') {
    const error = new Error("User Not Found");
    error.status = 404;
    return next(error);
  } else if(password !== '1234') {
    const error = new Error("User Not Found");
    error.status = 401;
    return next(error);
  }
  next();
}, (req, res, next)=>{
  res.json({message: "LoggedIn Success"});
});

router.post('/login', (req, res, next)=>{
  res.json({message: "LoggedIn Success"});
});

router.post('/', (req, res,next)=>{
  const {id, password} = req.body;
  if(!id) {
    const error = new Error("Bad Request");
    error.status = 400;
    return next(error);
  } else if(!password) {
    const error = new Error("Bad Request");
    error.status = 400;
    return next(error);
  }
  const User = {
    id: id,
    password: password
  };
  req.CreateUser = User;
  next();
})
router.post('/', (req, res, next)=>{
  res.json(req.CreateUser);
});

module.exports = router;