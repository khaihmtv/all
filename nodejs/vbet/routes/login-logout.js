let router = require('express').Router()
let User = require('../models/user')

router.route('/login')
.get((req, res, next)=>{
  if(req.session.userId){
    User.findOne({_id:req.session.userId})
    .exec((err,user)=>{
      return res.render('login',{acc:user.username,ba:user.bank.balance,sex:user.sex});
    })
  }else{
    return res.render('login',{acc:'unlogin'})
  }
})
.post((req, res, next)=>{
  if(req.body.loguser && req.body.logpassword){
    User.authenticate(req.body.loguser,req.body.logpassword,(error,user)=>{
      if(error || !user){
        res.send({er:'sai'})
      }else{
        req.session.userId = user._id
        res.send({redirect:'/'})
      }
    })
  }
})

router.route('/logout')
.get((req, res, next)=>{
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
})

module.exports=router