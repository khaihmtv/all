let router = require('express').Router();
let User = require('../models/user')

router.route('/')
.get(function (req, res, next) {
  if(req.session.userId){
    User.findOne({_id:req.session.userId})
    .exec((err,user)=>{
      return res.render('home',{acc:user.username,ba:user.bank.balance,sex:user.sex});
    })
  }else{
    return res.render('home',{acc:'unlogin'})
  }
})


module.exports=router