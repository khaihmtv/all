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

var bien={
    run:1,
    tinh:["47","15","12"],
    ntime:1546183634,
    delay:6000,
    kq:{
        47:{
            lv:"***-***-***",
            7:["**","**","**","**"],
            6:["***","***","***"],
            5:["****","****","****","****","****","****"],
            4:["****","****","****","****"],
            3:["28201","81242","31878","66321","69183","49209"],
            2:["10232","12365"],
            1:"40675",
            0:"*****"
        }
    },
    dt:{
        d123:{
            run:1,
            kq:["9","76","178"]},
            dtt4:{run:1,kq:["6866"]
        },
        d6x55:{
            run:1,
            kq:{
                id:8,
                g:["01","09","15","17","25","26","08"]
            }
        },
        dmax4d:{
            run:1,
            kq:{
                id:7,
                g:["9208","0227","3214","6493","013+","*"],
                kt:{
                    1:"*",2:"*",3:"*"
                }
            }
        }
    }
};
var o={
    time:bien.ntime,
    tinh:bien.tinh,
    kq:bien.kq[bien.tinh]
};
var jo=JSON.stringify(o);
var a=new Date(bien.ntime).getDay();
io.on("connection",function(socket){
    console.log("co nguoi ket noi");
    console.log(a);
    socket.emit("jo",jo);
});