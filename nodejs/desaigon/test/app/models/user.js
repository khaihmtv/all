const mongoose=require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {type: String,unique: true,},
  email:{type: String,unique: true,},
  password:{type:String},
  name:{type:String},
  sex:{type:Boolean},
  bal:{ type: mongoose.Schema.Types.ObjectId, ref: 'Bal' },
  phone:{type:Number},
  msg:[{title:{type:String},content:{type:String},time:Date,read:Boolean}],
  ve: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ve' }],
});

userSchema.statics.login = async function (login,password,callback) {
    let user = await this.findOne({
      username: login,
    })
    if (!user) {
        return callback(null,user)
      }{
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            return callback(null,user)
          } else {
           return callback()
          }
        })
      }
    
};
userSchema.statics.authenticate = function (id, callback) {
  this.findOne({ _id: id })
    .exec(function (err, user) {
      return callback(null, user);
    })
}
    
userSchema.pre('save', function (next) {
  
  let user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});
userSchema.statics.newpass = async function(id,newpass,callback){
  let user = await this.findOne({
    _id: id,
  })
  if (!user) {
    return callback()
  }else{
    bcrypt.hash(newpass, 10, function (err, hash) {
      if (err) {
        return next(err);
      }
      
      if(hash){
        return callback(null,hash)
      }
    })
  }
}


const User = mongoose.model('User', userSchema);

module.exports=User;