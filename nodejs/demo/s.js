const express=require("express");
const app=express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

const server = require("http").Server(app);
const io = require("socket.io")(server);
server.listen(3000);

app.use(require('./routes'))

require('./io.js')(io);

var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://127.0.0.1:27017/', function (err, db) {
    if (err) throw err;
    console.log('Tao thanh cong database');
    db.close();
});