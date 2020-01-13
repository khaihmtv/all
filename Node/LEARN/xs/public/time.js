var socket=io("http://localhost:3000");

$(document).ready(function(){

    socket.on("jo", function(data){
        xuly(data);
        
    });

    function now(){
        n=new Date();
        h=n.getHours();
        m=n.getMinutes();
        s=n.getSeconds();
        if (h<16){t=1}else if(h=16&&m<15){t=2}else if(h=17&&m<15){t=3}else if(h=18&&m<15){t=4}else if(h>=18){t=5}else{t=6}
        return t;
    }
    
    function trangthai(t){
        n=new Date();
        switch(t){
            case 1:{
                $('#clockmn').html("Trực Tiếp Xổ Số Miền Nam  Vào Lúc  <b>16h15</b>");
                $('#clockmt').html("Trực Tiếp Xổ Số Miền Trung Vào Lúc <b>17h15</b>");
                $('#clockmb').html("Trực Tiếp Xổ Số Miền Bắc  Vào Lúc  <b>18h15</b>");
                break;
            }
            case 2:{
                $('#clockmn').html("Trực Tiếp Xổ Số Miền Nam Sau " +(15-n.getMinutes())+" Phút "+(60-n.getSeconds())+" Giây");
                break;
            }
            case 3:{
                $('#clockmt').html("Trực Tiếp Xổ Số Miền Trung Sau " +(15-n.getMinutes())+" Phút "+(60-n.getSeconds())+" Giây");
                break;
            }
            case 4:{
                $('#clockmb').html("Trực Tiếp Xổ Số Miền Bắc Sau " +(15-n.getMinutes())+" Phút "+(60-n.getSeconds())+" Giây");
                break;
            }
            case 5:{
    
                break;
            }
            case 6:{
                if(n.getHours()=16){
                    $('#clockmt').html("Trực Tiếp Xổ Số Miền Trung Vào Lúc <b>17h15</b>");
                    $('#clockmb').html("Trực Tiếp Xổ Số Miền Bắc  Vào Lúc  <b>18h15</b>");
                }else{
                    $('#clockmb').html("Trực Tiếp Xổ Số Miền Bắc  Vào Lúc  <b>18h15</b>");
                }
                break;
            }
            default:{
                
            }
        }
    }

    function run(delay){
        setTimeout(function(){
            t=now();
            if(t>1&&t<5){delay=1000}else{delay=5000}
            trangthai(t);
            return run(delay);
        },delay);
        
    }
    //run(0);

    function ghi(a){
        
    }
        
    function xuly(data){
        data=data;
        o=JSON.parse(data);
        t=new Date(o.time*1000);
        thu=t.getDay()+1;
        switch(thu){
            case 1:thu="Chủ Nhật";break;
            case 2:thu="Thứ Hai";break;
            case 3:thu="Thứ Ba";break;
            case 4:thu="Thứ Tư";break;
            case 5:thu="Thứ Năm";break;
            case 6:thu="Thứ Sáu";break;
            default:thu="Thứ Bảy"
        }
        ngay=t.getDate()+" - "+(t.getMonth()+1)+", "+t.getFullYear();
        alert(ngay);
        tinh=o.tinh[1];
        alert(tinh);
        
    }
    
    

});