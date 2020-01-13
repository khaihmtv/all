const mongoose=require('mongoose')

const User=require('./user')
const Message=require('./message')
const Ve=require('./ve')
const Bal=require('./bal')

mongoose.Promise=global.Promise
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/awq', {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


const models = { User, Message, Ve, Bal};

module.exports=models

