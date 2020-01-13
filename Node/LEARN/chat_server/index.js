var express=require("express");
var app=express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var mang=[];

io.on("connection",function(socket){
    console.log("co nguoi ket noi ");

    socket.on("send-ok",function(data){   
        if(mang.indexOf(data)>=0){
            socket.emit("thatbai");
        }else{
            mang.push(data);
            socket.user = data;
            socket.emit("thanhcong",data);
            io.sockets.emit("new",mang);
        }     
    });

    socket.on("out",function(){
        mang.splice(mang.indexOf(socket.user),1);
        socket.broadcast.emit("new",mang);
    });

    socket.on("gui", function(data){
        io.sockets.emit("nd", {u:socket.user, n:data});
    });
});

app.get("/",function(req, res){
    res.render("trangchu");
});