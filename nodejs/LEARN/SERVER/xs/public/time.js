var socket=io("http://localhost:3000");

$(document).ready(function(){

    socket.on("bien", function(data){
        alert(bien.tinh);
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
        

    
    

});