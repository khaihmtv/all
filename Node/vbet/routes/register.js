let router = require('express').Router()
let User = require('../models/user')

router.route('/register')
.get((req,res)=>{
  if(req.session.userId){
    User.findOne({_id:req.session.userId})
    .exec((err,user)=>{
      return res.render('register',{acc:user.username,ba:user.bank.balance,sex:user.sex});
    })
  }else{
    return res.render('register',{acc:'unlogin'})
  }
})
.post((req,res,next)=>{
  if (req.body.sex &&
    req.body.name &&
    req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.repassword) {

    var userData = {
      sex:req.body.sex,
      name:req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      time:Date.now(),
      bank:{balance:0}
    }

    User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.redirect('/');
      }
    });

  }
})

module.exports=router