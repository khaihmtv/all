const express=require('express');
const app = express()
const port = 3000
const bodyParser=require('body-parser');
const session = require('express-session');

//connect to MongoDB

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  //cookie: { maxAge: 6000 },
  resave: true,
  saveUninitialized: false
}));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use(express.static('./public'))

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(require('./app/route'))

app.listen(port, function(err) {
  if(err){console.error(err)}
  console.log('App listen on port ' + port)
})
