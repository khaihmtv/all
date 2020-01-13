import {  set, connect, connection } from 'mongoose';

Promise=global.Promise
set('useFindAndModify', false);
set('useCreateIndex', true)
connect('mongodb://localhost/nanycode', {useNewUrlParser: true,useUnifiedTopology: true});

let db = connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
export default db

