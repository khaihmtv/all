let router = require('express').Router()
let User = require('../models/user')

router.route('/xoso')
.get((req, res, next)=>{
  if(req.session.userId){
    User.getba(req.session.userId,(user,a)=>{
      return res.render('xoso',{acc:user.username,ba:a,sex:user.sex});
    })
  }else{
    return res.render('login',{acc:'unlogin'})
  }
})

module.exports=router