
"user strict";

let userSchema=require('../../test/lib')

module.exports = {
  rendercore : rendercore
};

function rendercore(req, res, next) {
    res.render('core')
}

/*function saveuser(req, res ,next){
  if(req.body.name){
    usermodel.connectDb
    usermodel.models.User.create({username:req.body.name},function (err, user) {
      if (err) return handleError(err);
      // saved 
      console.log(user)
    })
  }
}*/