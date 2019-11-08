const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

Number.prototype.toMoney = function(decimals, decimal_sep, thousands_sep)
{ 
   var n = this,
   c = isNaN(decimals) ? 0 : Math.abs(decimals), //if decimal is zero we must take it, it means user does not want to show any decimal
   d = decimal_sep || '.', //if no decimal separator is passed we use the dot as default decimal separator (we MUST use a decimal separator)

   /*
   according to [https://stackoverflow.com/questions/411352/how-best-to-determine-if-an-argument-is-not-sent-to-the-javascript-function]
   the fastest way to check for not defined parameter is to use typeof value === 'undefined' 
   rather than doing value === undefined.
   */   
   t = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep, //if you don't want to use a thousands separator you can pass empty string as thousands_sep value

   sign = (n < 0) ? '-' : '',

   //extracting the absolute value of the integer part of the number and converting to string
   i = parseInt(n = Math.abs(n)) + '', 

   j = ((j = i.length) > 3) ? j % 3 : 0; 
   return sign + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : ''); 
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  msg:[
    {
      title:String,
      content:String,
      time:Date,
      stt:Boolean
    }
  ],
  time:Date,
  sex:Boolean,
  name:String,
  bank:{
    balance:{
      type:Number
    },
    history:{
      deposit:[
        {
          total:Number,
          time:Date
        }
      ],
      withdraw:[
        {
          total:Number,
          time:Date
        }
      ],
      send:[
        {
          total:Number,
          time:Date,
          to:String
        }
      ],
      receive:[
        {
          total:Number,
          time:Date,
          from:String
        }
      ],
      wait:[
        {
          total:Number,
          time:Date,
          stt:Boolean
        }
      ]
    }
  },
  ve:{
    return:[
    {
      name:String,
      loaive:String,
      money:Number,
      time:Date,
      winloss:Boolean
    }
  ],
    unreturn:[
      {
        name:String,
        loaive:String,
        money:Number,
        time:Date
      }
    ]
}
});

//authenticate input against database
UserSchema.statics.authenticate = function (loguser, password, callback) {
  User.findOne({ username: loguser })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  let user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

UserSchema.statics.changeba=function(a,b,c,callback){
  User.findOne({ _id:a })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      if(c===true){
        let bb=user.bank.balance+=b
        db.updateOne({_id:user._id},{$set:{bank:{balance:bb}}},(err,raw)=>{return(callback(raw))})
      }else{
        let bb=user.bank.balance-=b
        db.updateOne({_id:user._id},{$set:{bank:{balance:bb}}},(err,raw)=>{return(callback(raw))})
      }
    }
)}

UserSchema.statics.getba=function(a,callback){
  User.findOne({ _id:a })
  .exec(function (err, user) {
    if (err) {
      return callback(err)
    } else if (!user) {
      var err = new Error('User not found.');
      err.status = 401;
      return callback(err);
    }
    let aa=user.bank.balance.toMoney()
    return callback(user,aa)
  }
)}


var User = mongoose.model('User', UserSchema);
module.exports = User;

const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
});

userSchema.statics.findByLogin = async function (login) {
    let user = await this.findOne({
      username: login,
    });
  
    if (!user) {
      user = await this.findOne({ email: login });
    }
  
    return user;
};

userSchema.pre('remove', function(next) {
    this.model('Message').deleteMany({ user: this._id }, next);
});


const User = mongoose.model('User', userSchema);

module.exports=User;