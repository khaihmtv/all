
"user strict";
const User=require('../models').User
const Bal=require('../models').Bal
const Message=require('../models').Message


module.exports = {
  rendercore,
  rendermessage,
  renderlogin,
  renderregister,
  renderprofile,
  renderghiso,
  login,
  register,
  logout,
  updateprofile
};
function rendercore(req, res, next) {
  if(req.session.userId){
    Bal.findOne({user:req.session.userId})
      .populate('user')
      .exec((e,r)=>{
       if(e)return next(e)
      return res.render('core',{acc:r.user.username,ba:r.bal,sex:r.user.sex});
    })
  }else{
    return res.render('core',{acc:'unlogin'})
  }
}

function renderlogin(req, res, next) {
  if(req.session.userId){
    Bal.findOne({user:req.session.userId})
      .populate('user')
      .exec((e,r)=>{
       if(e)return next(e)
      return res.render('login',{acc:r.user.username,ba:r.bal,sex:r.user.sex});
    })
  }else{
    return res.render('login',{acc:'unlogin'})
  }
}

function renderregister(req, res, next) {
  if(req.session.userId){
    Bal.findOne({user:req.session.userId})
      .populate('user')
      .exec((e,r)=>{
       if(e)return next(e)
      return res.render('register',{acc:r.user.username,ba:r.bal,sex:r.user.sex});
    })
  }else{
    return res.render('register',{acc:'unlogin'})
  }
    
}

function renderghiso(req, res, next) {
  if(req.session.userId){
    Bal.findOne({user:req.session.userId})
      .populate('user')
      .exec((e,r)=>{
       if(e)return next(e)
      return res.render('ghiso',{acc:r.user.username,ba:r.bal,sex:r.user.sex});
    })
  }else{
    return res.render('ghiso',{acc:'unlogin'})
  }
}



function renderprofile(req,res,next){
  if(req.session.userId){
    Bal.findOne({user:req.session.userId})
      .populate('user')
      .exec((e,r)=>{
       if(e)return next(e)
      return res.render('profile',{acc:r.user.username,ba:r.bal,sex:r.user.sex,name:r.user.name,email:r.user.email,phone:r.user.phone});
    })
  }else{
    return res.redirect('/')
  }
}

function rendermessage(req,res,next){
  if(req.session.userId){
    Bal.findOne({user:req.session.userId})
      .populate('user')
      .exec((e,r)=>{
        if(e)return next(e)
  User.authenticate(req.session.userId,(err,user)=>{
    if(err || !user){
        res.send({e:'sai'})
      }else{
        res.render('message',{acc:r.user.username,ba:r.bal,sex:r.user.sex,name:r.user.name,message:r.user.msg})
      } 
  })
})
  }else{
    return res.redirect('/')
  }
}


async function updateprofile(req,res,next){
  if(req.body.password){
    User.newpass(req.session.userId,req.body.password,(err,hash)=>{
      if(err)return next(err)
      if(hash){
        User.updateOne({_id:req.session.userId}, {$set:{ password:hash}},(err,doc)=>{
          res.send({redirect:'/user/profile'})
        })
      }
    })
  }else{
    if(req.body.sex){await User.updateOne({_id:req.session.userId}, {$set:{ sex:req.body.sex}},(err,doc)=>{})}
    if(req.body.name){await User.updateOne({_id:req.session.userId}, {$set:{ name:req.body.name}},(err,doc)=>{})}
    if(req.body.phone){await User.updateOne({_id:req.session.userId}, {$set:{ phone:req.body.phone}},(err,doc)=>{})}
    
    res.redirect('/user/profile')
  }
  
}


function register(req,res,next){
  if(req.body.checkemail){
    User.findOne({email:req.body.checkemail})
    .exec((err,user)=>{
      if(err) return next(err)
      if(user){res.send({checkemail:false })
    }else{res.send({checkemail:true })}
    })
  }
  if(req.body.checkusername){
    User.findOne({username:req.body.checkusername})
    .exec((err,user)=>{
      if(err) return next(err)
      if(user){res.send({checkusername:false })
    }else{res.send({checkusername:true })}
    })
  }
  if (req.body.email && req.body.username && req.body.password) {

    let msg={
      title:'Đăng ký thành công',
      content:'Quý khách đã đăng ký thành công tài khoản '+req.body.username +'. Để biết thêm chi tiết cách nạp tiền vào tài khoản xin mời quý khách vào <a>Hướng dẫn</a>',
      time:Date.now(),
      read:false
    }
    Bal.create({bal:0},(e, bal)=>{
      if(e){return next(e)}
      let userData = {
        bal:bal._id,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        msg:msg
      }
      User.create(userData, function (error, user) {
        if (error) {return next(error)}
        Bal.updateOne({_id:bal._id},{user:user._id,bal:0},(e,r)=>{
          if(e){return next(e)
          }else{
            req.session.userId = user._id;
            return res.redirect('/')
          }
        })
      })
    }) 
  }
} 




function login(req,res,next){
  User.login(req.body.logusername,req.body.logpassword,(err,user)=>{
    if(err || !user){
        res.send({a:'Sai tên truy cập hoặc mật khẩu'})
      }else{
        req.session.userId = user._id
        res.send({redirect:'/'})
      } 
  })
}
function logout(req,res){
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        return next(err)
      } else {
        return res.redirect('/')
      }
    })
  }
}
