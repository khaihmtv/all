const express=require('express');
const app=express();
app.use(express.static("public"));
app.set("views","./views");
app.set("view engine", "ejs");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

app.get("/", (req, res)=>{
    res.render("trangchu");
});

function now(){
    n=new Date();
    h=n.getHours();
    m=n.getMinutes();
    s=n.getSeconds();
    if (h<16){t=1}else if(h=16&&m<15){t=2}else if(h=17&&m<15){t=3}else if(h=18&&m<15){t=4}else if(h>=18){t=5}else{t=6}
    return t;
}
t=now();

function trangthai(t){
    switch(t){
        case 1:{
            $('#clockmn').html("Trực Tiếp Xổ Số Miền Nam  Vào Lúc  <b>16h15</b>");
            $('#clockmt').html("Trực Tiếp Xổ Số Miền Trung Vào Lúc <b>17h15</b>");
            $('#clockmb').html("Trực Tiếp Xổ Số Miền Bắc  Vào Lúc  <b>18h15</b>");
            break;
        }
        case 2:{
            $('#clockmn').html("Trực Tiếp Xổ Số Miền Nam Sau " +(15-Date.getMi())+" Phút "+(60-Date.getSeconds())+" Giây");
            break;
        }
        case 3:{

            break;
        }
        case 4:{

            break;
        }
        case 5:{

            break;
        }
    }
}
