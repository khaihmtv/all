const User=require('../models').User
const Ve=require('../models').Ve
const Bal=require('../models').Bal
const cron=require('node-cron')

module.exports = {
  userauth,
  datcuoc
}

let dongcuoc=0
let ngaymn='Chủ Nhật, 26 - 5 - 2019'
let ngaymt='Chủ Nhật, 26 - 5 - 2019'
let ngaymb='Chủ Nhật, 26 - 5 - 2019'
let daimn=[22,23,24]
let daimt=[39,31]
let daimb=[51]
let tenmn=["Tiền Giang","Kiên Giang","Đà Lạt"]
let tenmt=["Kon Tum","Khánh Hòa"]

cron.schedule('0 19 2 2 * *',()=>{
  dongcuoc=1
})
cron.schedule('*/5 25 * * * *',()=>{
  dongcuoc=2
  dai()
})
cron.schedule('0 18 * * * *',()=>{
  dongcuoc=3
  dai()
})
cron.schedule('0 1 * * * *',()=>{
  dongcuoc=0
  dai()
})

function dai(){
  let d=new Date()
  let thu=d.getDay()+1;

  let a;
  switch(thu){
      case 1:a="Chủ Nhật, ";break;
      case 2:a="Thứ Hai, ";break;
      case 3:a="Thứ Ba, ";break;
      case 4:a="Thứ Tư, ";break;
      case 5:a="Thứ Năm, ";break;
      case 6:a="Thứ Sáu, ";break;
      case 7:a="Thứ Bảy, ";break;
  }

  if(d.getHours()==17){
    ngaymn=a+d.getDate()+" - "+(d.getMonth()+1)+" - "+d.getFullYear()
    switch (thu){
      case 1:daimn=[22,23,24];tenmn=["Tiền Giang","Kiên Giang","Đà Lạt"];break;
      case 2:daimn=[1,2,3];tenmn=["TP.HCM","Đồng Tháp","Cà Mau"];break;
      case 3:daimn=[7,8,9];tenmn=["Bến Tre","Vũng Tàu","Bạc Liêu"];break;
      case 4:daimn=[10,11,12];tenmn=["Đồng Nai","Cần Thơ","Sóc Trăng"];break;
      case 5:daimn=[13,14,15];tenmn=["Tây Ninh","An Giang","Bình Thuận"];break;
      case 6:daimn=[16,17,18];tenmn=["Vĩnh Long","Bình Dương","Trà Vinh"];break;
      case 7:daimn=[1,19,20,21];tenmn=["TP.HCM","Long An","Hậu Giang","Bình Phước"];break;
    }
  }
  if(d.getHours()==18){
    ngaymt=a+d.getDate()+" - "+(d.getMonth()+1)+" - "+d.getFullYear()
    switch(a){
      case 1:daimt=[39,31];tenmt=["Kon Tum","Khánh Hòa"];break;
      case 2:daimt=[26,27];tenmt=["Thừa T. Huế","Phú Yên"];break;
      case 3:daimt=[28,29];tenmt=["Quảng Nam","Đắk Lắk"];break;
      case 4:daimt=[30,31];tenmt=["Đà Nẵng","Khánh Hòa"];break;
      case 5:daimt=[32,33,34];tenmt=["Bình Định","Quảng Trị","Quảng Bình"];break;
      case 6:daimt=[35,36];tenmt=["Gia Lai","Ninh Thuận"];break;
      case 7:daimt=[30,37,38];tenmt=["Đà Nẵng","Quảng Ngãi","Đắk Nông"];break;
    }
  }
  if(d.getHours()==19){
    ngaymb=a+d.getDate()+" - "+(d.getMonth()+1)+" - "+d.getFullYear()
    switch(a){
      case 1:daimb=[51];break;
      case 2:daimb=[46];break;
      case 3:daimb=[47];break;
      case 4:daimb=[48];break;
      case 5:daimb=[46];break;
      case 6:daimb=[49];break;
      case 7:daimb=[50];break;
    }
  }
  
  
}
function datcuoc(req, res, next){
  let a=0;let b=0;let e=0;let f=0;let g=0;let c=[];
  switch(req.body.matinh.length){
        case 1:{e=400;f=2400;g=12000};break
        case 2:{e=230;f=600;g=1600};break
        case 3:{e=180;f=270;g=450};break
        case 4:{e=160;f=190;g=250};break
  }
  switch(req.body.tencuoc){
        case '1':{
              (req.body.tentinh=='3')?a=27:a=14;
              (req.body.tentinh=='3')?b=105:b=80;
        };break;
        case '2':{
              (req.body.tentinh=='3')?a=27:a=14;
              (req.body.tentinh=='3')?b=950:b=714;
        };break;
        case '3':{
              (req.body.tentinh=='3')?a=4:a=1;
              (req.body.tentinh=='3')?b=85:b=85;
        };break;
        case '4':{
              (req.body.tentinh=='3')?a=1:a=1;
              (req.body.tentinh=='3')?b=85:b=85;
        };break;
        case '5':{
              (req.body.tentinh=='3')?a=3:a=1;
              (req.body.tentinh=='3')?b=700:b=700;
        };break;
        case '6':{
              (req.body.tentinh=='3')?a=1:a=1;
              (req.body.tentinh=='3')?b=700:b=700;
        };break;
        case '7':{
              (req.body.tentinh=='3')?a=27:a=16;
              (req.body.tentinh=='3')?b=e:b=e;
        };break;
        case '8':{
              (req.body.tentinh=='3')?a=27:a=16;
              (req.body.tentinh=='3')?b=e:b=e;
        };break;
        case '9':{
              (req.body.tentinh=='3')?a=27:a=16;
              (req.body.tentinh=='3')?b=e:b=e;
        };break;
        case '10':{
              (req.body.tentinh=='3')?a=27:a=16;
              (req.body.tentinh=='3')?b=e:b=e;
        };break;
        case '11':{
              (req.body.tentinh=='3')?a=27:a=16;
              (req.body.tentinh=='3')?b=e:b=e;
        };break;
        case '12':{
              (req.body.tentinh=='3')?a=27:a=16;
              (req.body.tentinh=='3')?b=f:b=f;
        };break;
        case '13':{
              (req.body.tentinh=='3')?a=27:a=16;
              (req.body.tentinh=='3')?b=g:b=g;
        };break;
        case '14':{
              (req.body.tentinh=='3')?a=1:a=1;
              (req.body.tentinh=='3')?b=0.95:b=0.95;
        };break;
        case '15':{
              (req.body.tentinh=='3')?a=1:a=1;
              (req.body.tentinh=='3')?b=0.95:b=0.95;
        };break;
        case '16':{
              (req.body.tentinh=='3')?a=1:a=1;
              (req.body.tentinh=='3')?b=0.95:b=0.95;
        };break;
        case '17':{
              (req.body.tentinh=='3')?a=1:a=1;
              (req.body.tentinh=='3')?b=0.95:b=0.95;
        };break;

  }
  if(req.body.tentinh=='1'){req.body.matinh.forEach((v,i)=>{c.push(daimn[v])})}
  if(req.body.tentinh=='2'){req.body.matinh.forEach((v,i)=>{c.push(daimt[v])})}
  if(req.body.tentinh=='3'){c.push(daimb[0])}

  let ve={
        tentinh:req.body.tentinh,
        tencuoc:req.body.tencuoc,
        matinh:c,
        so:req.body.so,
        tiencuoc:req.body.tiencuoc,
        tongcuoc:req.body.tiencuoc*a*req.body.matinh.length,
        time:Date.now(),
        tilewin:b*req.body.tiencuoc,
        winloss:null,
        tienwin:null,
        user:req.session.userId
  }
  Bal.findOne({user:req.session.userId})
  .exec((e,r)=>{
    if(e) next(e);
    if(ve.tongcuoc>r.bal){
      res.send({e:'Số tiền bạn cược vượt quá số dư tài khoản hiện có. Vui lòng gửi thêm.'})
    }else{
      Ve.create(ve,(err,doc)=>{
        console.log(doc)
        if (err) {
          return next(err);
        } else {
          let a=r.bal-ve.tongcuoc
          Bal.findOneAndUpdate({user:req.session.userId},{bal:a},{new:true})
          .then(doc1=>{
            return res.send({r:'Đặt cược thành công.',bal:doc1.bal})
          })
          .catch(e=>{
            Ve.findOneAndUpdate({user:req.session.userId},{winloss:'*'},(err,doc)=>{
              return res.send({e:'Có lỗi trong quá trình cược. Vui lòng thử lại sau.'})
            })
            
          })
          
        }
      })
    }
  })
}

function serauth(req, res, next){
  if(req.session.userId){
    Ve.find({$and: [{user:req.session.userId}, {time:{$gt:a-86400000}}]},(e,ve)=>{  
      Bal.findOne({user:req.session.userId})
      .populate('user')
      .exec((e,r)=>{
        if(e) {return next(e)}
        return res.render('ghiso',{
          acc:r.user.username,ba:r.bal,sex:r.user.sex,
          dongcuoc:dongcuoc,
          tenmn:tenmn,tenmt:tenmt,
          ngaymn:ngaymn,ngaymt:ngaymt,ngaymb:ngaymb,
          ve:ve
        });
      })
    })
  }else{
    res.send({e:'Bạn phải đăng nhập trước khi vào trang này.',redirect:null})
  } 
}


function userauth(req, res, next){
  let a=Date.now()
  req.session.userId='5cf69942a568a51f677700bd'
  Ve.find({$and: [{user:'5cf69942a568a51f677700bd'}, {time:{$gt:a-86400000}}]},(e,ve)=>{  
  Bal.findOne({user:'5cf69942a568a51f677700bd'})
  .populate('user')
    .exec((err,r)=>{
      return res.render('ghiso',{
        acc:r.user.username,ba:r.bal,sex:r.user.sex,
        dongcuoc:dongcuoc,
        tenmn:tenmn,tenmt:tenmt,
        ngaymn:ngaymn,ngaymt:ngaymt,ngaymb:ngaymb,
        ve:ve
      });
    })
  })
}

Bal.findOneAndUpdate({user:'5cf69942a568a51f677700bd'},{bal:123000},{new:true})








