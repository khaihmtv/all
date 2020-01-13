"use strict";

const express = require('express');
const app = express();
const port = 3000;
let hbs=require('express-hbs');

// Do Registration routes.
require('./routes')(app);

app.use('/', express.static('./public'));
app.engine('server.view.html', hbs.express4({
  extname:'server.view.html'
}));

app.set('view engine', 'server.view.html');
app.set('views', './views');

app.listen(port, function(err) {
  if(err) {
    console.error('Something error !!');
    console.error(err);
  }

  console.log('App listen on port ' + port);
});