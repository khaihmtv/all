import {  set, connect, connection } from 'mongoose';

import Kq from './Kq';


Promise=global.Promise
set('useFindAndModify', false);
set('useCreateIndex', true)
connect('mongodb://localhost/sogiau', {useNewUrlParser: true,useUnifiedTopology: true});

let db = connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


const models = {Kq};

export default models
