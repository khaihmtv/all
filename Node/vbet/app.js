const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

//connect to MongoDB
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/testForAuth', { useMongoClient: true, options: { promiseLibrary: mongoose.Promise }})
const db = mongoose.connection;
//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  //cookie: { maxAge: 6000 },
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// serve static files from template
app.use(express.static('./public'));

//set view
app.set('view engine','ejs')
app.set('views','./views')

// include routes
app.use(require('./routes'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Trang bạn vừa truy cập không có.  <a href="/"> Trở Lại </a>');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

// listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});

