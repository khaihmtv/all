var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/profile', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        } else {
          return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
        }
      }
    });
});

router.post('/test',(req,res,next)=>{
  if (req.body.logemail && req.body.logpassword) {
      User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
        if (error || !user) {
          var err = new Error('Wrong email or password.');
          err.status = 401;
          return next(err);
        } else {
          req.session.userId = user._id;
          return res.redirect('/test');
        }
      });
    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
})
router.get('/test',(req,res)=>{
  res.render('test')
})
router.get('/test/:user/:view', function (req, res, next) {
    if(req.params.user=='khai'){console.log(req.params.view)}
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          res.render('test', {user:'Ban chua dang nhap'})
          
        } else {
          return res.render('test', {user:user.email})
        }
      }
    });
});
router.get('/endpoint',function(req, res){
  res.render('endpoint')
})
router.post('/endpoint', function(req, res){
	var obj ={a:'s'};
	console.log('body: ' + JSON.stringify(req.body));
  req.query=obj
  res.send(req.query)
});

module.exports = router;