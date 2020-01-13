const mongoose=require('mongoose')

const User=require('./user')
const Message=require('./message')

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/teadast', {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


const models = { User, Message };

module.exports=models
