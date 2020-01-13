var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
app.set("views engine","ejs");
app.set("views","./views");
var nodemailer = require("nodemailer");

app.listen(3000);

var transporter =nodemailer.createTransport({
    host:'smtp.gmail.com',
    auth:{
        username:'khaihmtv@gmail.com',
        password:'khongnho7!'
    }
})