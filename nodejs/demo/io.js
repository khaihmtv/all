const rp = require('request-promise')
const cron=require('node-cron')

mn='https://www.minhngoc.group/xstt/MN/mien-nam.php'
mt='https://www.minhngoc.group/xstt/MT/mien-trung.php'
mb='https://www.minhngoc.group/xstt/MB/mien-bac.php'

var old=''
var kqtt1={
  run:1,
  tinh:["47"],
  ntime:1547599533,
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
          0:"65475"
      },
      1:{
          lv:"12F2",
          8:"26",
          7:"492",
          6:["0159","3595","3106"],
          5:"6296",
          4:["72406","12356","11166","90235","21524","+++++","*****"],
          3:["*****","*****"],
          2:"*****",
          1:"*****",
          0:"******"
      },
      2:{
          lv:"D53",
          8:"05",
          7:"066",
          6:["2207","9550","6674"],
          5:"5054",
          4:["80112","29964","86466","64951","31915","+++++","*****"],
          3:["*****","*****"],
          2:"*****",
          1:"*****",
          0:"******"
      },
      3:{
          lv:"T12K5",
          8:"57",
          7:"891",
          6:["7425","2630","7755"],
          5:"6101",
          4:["32688","71379","75145","46679","20450","82525","88818"],
          3:["71685","+++++"],
          2:"*****",
          1:"*****",
          0:"******"
      },
      28:{
          lv:"T12K5",
          8:"57",
          7:"891",
          6:["7425","2630","7755"],
          5:"6101",
          4:["32688","71379","75145","46679","20450","82525","88818"],
          3:["71685","+++++"],
          2:"*****",
          1:"*****",
          0:"******"
      },
      32:{
          lv:"D53",
          8:"05",
          7:"066",
          6:["2207","9550","6674"],
          5:"5054",
          4:["80112","29964","86466","64951","31915","+++++","*****"],
          3:["*****","*****"],
          2:"*****",
          1:"*****",
          0:"******"
      },
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
var kqtt=JSON.stringify(kqtt1)

module.exports = function(io) {
    
  var trangchu = io
  .of('/')
  .on('connection', function(socket) {
      console.log('trang chu connecting....')
      socket.on('s',function(){console.log('s')})
      socket.emit('kqtt',kqtt)
        setInterval(()=>{
            if(kqtt!==old){io.sockets.emit('update',kqtt);old=kqtt}
        },2000) 
    })

    
        
    var ketqua = io.of('/ketqua').on('connection',()=>{
        console.log('ket qua connection...')
        io.of('/ketqua').emit('ketqua','kkk')
        io.of('/ketqua').on('s',()=>{
            console.log('s')
        })
     })
    
};

cron.schedule('*/6 13-40 16 * * *',()=>{
    getResult(mn).then(r=>{if(r!==kqtt){kqtt=r}else{console.log('____')}})
    .catch(err => {console.log('....err.... ')})
})

cron.schedule('*/6 13-40 17 * * *',()=>{
    getResult(mt).then(r=>{if(r!==kqtt){kqtt=r}else{console.log('____')}})
    .catch(err => {console.log('....err.... ')})
})

cron.schedule('*/6 13-40 18 * * *',()=>{
    getResult(mb).then(r=>{if(r!==kqtt){kqtt=r}else{console.log('____')}})
    .catch(err => {console.log('....err.... ')})
})


async function getResult(url) {
  const body = await rp(url)
  let a = body.substr(8)
  let b = a.slice(0, a.length - 1)
  eval('var r=' + b)
  return JSON.stringify(r)
}
