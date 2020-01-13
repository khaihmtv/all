const express=require('express');
const app=express();
app.use(express.static("public"));
app.set("views","./views");
app.set("view engine", "ejs");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

app.get("/", (req, res)=>{
    res.render("trangejs",);
});




var days1 = 1;
var hours1 = 1;
var minutes1 = 48;
var seconds1 = 55;
				
 function display1() {
					
	if (days1 > 0 || hours1 > 0 || minutes1 > 0 || seconds1 > 0) {
						
	if (hours1 <= 0 && minutes1 <= 0 && seconds1 <= 0) {hours1 = 23; minutes1 = 59; seconds1 = 59; days1 -= 1}
	else if (minutes1 <= 0 && seconds1 <= 0) {minutes1 = 59; seconds1 = 59; hours1 -= 1}
	else if (seconds1 <= 0) {seconds1 = 59; minutes1 -= 1}
   else {seconds1 -= 1}
    } 
    a=seconds1;
    app.get("/", (req, res)=>{
        res.render("trangejs",{c:seconds1});
    });

    setTimeout(display1(),1000);
}
display1();
