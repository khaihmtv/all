var socket=io.connect("http://localhost:3000/");

$(document).ready(function(){

    $("#id").click(()=>{console.log('send'); socket.emit('s','a')})

    socket.on("kqtt",function(data){
        k=new kq(data);
        $(".content").html(k.kqmb());
        $(".content").append(k.kqmn());
        $(".content").append(k.kqmt());
    });
    socket.on("update",function(data){
        alert(data)
    });
});
class kq{
    constructor(data){
        this.data=data;
        this.o=JSON.parse(this.data);
        this.t=new Date(this.o.ntime*1000);
        this.thu=this.t.getDay()+1;
        this.ngay=this.t.getDate()+" - "+(this.t.getMonth()+1)+" - "+this.t.getFullYear();
        this.kq=this.o.kq;
        this.tinh=Object.keys(this.kq);
        this.mn=this.tinh.filter(tinh => tinh<25);
        this.mt=this.tinh.filter(tinh => tinh>25&tinh<=40);
        this.mb=this.tinh.filter(tinh => tinh>40);
        
    }
    showthu(){
        switch(this.thu){
            case 1:this.thu="Chủ Nhật";break;
            case 2:this.thu="Thứ Hai";break;
            case 3:this.thu="Thứ Ba";break;
            case 4:this.thu="Thứ Tư";break;
            case 5:this.thu="Thứ Năm";break;
            case 6:this.thu="Thứ Sáu";break;
            case 0:this.thu="Thứ Bảy";break;
        }
        return this.thu;
    }
    
    tt(a){
        this.ar=[];
        this.l=a.length;
        this.a=a;
        this.a.map(i=>{
            switch(i){
                case "1":{this.ar.push("TP.HCM")};break;
                case "2":{this.ar.push("Đồng Tháp")};break;
                case "3":{this.ar.push("Cà Mau")};break;
                case "7":{this.ar.push("Bến Tre")};break;
                case "8":{this.ar.push("Vũng Tàu")};break;
                case "9":{this.ar.push("Bạc Liêu")};break;
                case "10":{this.ar.push("Đồng Nai")};break;
                case "11":{this.ar.push("Cần Thơ")};break;
                case "12":{this.ar.push("Sóc Trăng")};break;
                case "13":{this.ar.push("Tây Ninh")};break;
                case "14":{this.ar.push("An Giang")};break;
                case "15":{this.ar.push("Bình Thuận")};break;
                case "16":{this.ar.push("Vĩnh Long")};break;
                case "17":{this.ar.push("Bình Dương")};break;
                case "18":{this.ar.push("Trà Vinh")};break;
                case "19":{this.ar.push("Long An")};break;
                case "20":{this.ar.push("Hậu Giang")};break;
                case "21":{this.ar.push("Bình Phước")};break;
                case "22":{this.ar.push("Tiền Giang")};break;
                case "23":{this.ar.push("Kiên Giang")};break;
                case "24":{this.ar.push("Đà Lạt")};break;
                case "26":{this.ar.push("Thừa T. Huế")};break;
                case "27":{this.ar.push("Phú Yên")};break;
                case "28":{this.ar.push("Quảng Nam")};break;
                case "29":{this.ar.push("Đắk Lắk")};break;
                case "30":{this.ar.push("Đà Nẵng")};break;
                case "31":{this.ar.push("Khánh Hòa")};break;
                case "32":{this.ar.push("Bình Định")};break;
                case "33":{this.ar.push("Quảng Trị")};break;
                case "34":{this.ar.push("Quảng Bình")};break;
                case "35":{this.ar.push("Gia Lai")};break;
                case "36":{this.ar.push("Ninh Thuận")};break;
                case "37":{this.ar.push("Quảng Ngãi")};break;
                case "38":{this.ar.push("Đắk Nông")};break;
                case "39":{this.ar.push("Kon Tum")};break;
            }
        })
        return this.ar;
    }
    
    kqmb(){
        this.t=this.mb[0];
        this.kqmb=`<div class="boxkq">
            <table class="mb" cellspacing="0" cellpading="0">
            <tbody>
                <tr>
                        <th colspan="2" class="t`+this.thu+`">`+this.showthu()+` <span class="ngay">`+this.ngay+`</span></th>
                </tr>
                <tr>
                    <td class="tinhmb">Miền Bắc</td>
                    <td>Ký hiệu trúng Đặc Biệt: <span class="ma">`+this.kq[this.t].lv+`</span></td>
                </tr>
                <tr>
                    <td>Giải ĐB</td>
                    <td>`+this.kq[this.t][0]+`</td>  
                </tr>
                <tr>
                    <td>Giải nhất</td>
                    <td>`+this.kq[this.t][1]+`</td>
                </tr>
                <tr>
                    <td>Giải nhì</td>
                    <td>
                        <div>`+this.kq[this.t][2][0]+`</div>
                        <div>`+this.kq[this.t][2][1]+`</div>
                    </td>
                </tr>
                <tr>
                    <td>Giải ba</td>
                    <td>
                        <div>`+this.kq[this.t][3][0]+`<br/>`+this.kq[this.t][3][3]+`</div>
                        <div>`+this.kq[this.t][3][1]+`<br/>`+this.kq[this.t][3][4]+`</div>
                        <div>`+this.kq[this.t][3][2]+`<br/>`+this.kq[this.t][3][5]+`</div>
                    </td>
                </tr>
                <tr>
                    <td>Giải tư</td>
                    <td>
                        <div>`+this.kq[this.t][4][0]+`<br/>`+this.kq[this.t][4][2]+`</div>
                        <div>`+this.kq[this.t][4][1]+`<br/>`+this.kq[this.t][4][3]+`</div>
                    </td>
                </tr>
                <tr>
                    <td>Giải năm</td>
                    <td>
                        <div>`+this.kq[this.t][5][0]+`<br/>`+this.kq[this.t][5][3]+`</div>
                        <div>`+this.kq[this.t][5][1]+`<br/>`+this.kq[this.t][5][4]+`</div>
                        <div>`+this.kq[this.t][5][2]+`<br/>`+this.kq[this.t][5][5]+`</div>
                    </td>
                </tr>
                <tr>
                    <td>Giải sáu</td>
                    <td>
                        <div>`+this.kq[this.t][6][0]+`</div>
                        <div>`+this.kq[this.t][6][1]+`</div>
                        <div>`+this.kq[this.t][6][2]+`</div>
                    </td>
                </tr>
                <tr>
                    <td>Giải bảy</td>
                    <td>
                        <div>`+this.kq[this.t][7][0]+`</div>
                        <div>`+this.kq[this.t][7][1]+`</div>
                        <div>`+this.kq[this.t][7][2]+`</div>
                        <div>`+this.kq[this.t][7][3]+`</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>`;
    return this.kqmb;
    }


    kqmn(){
        
        this.mn=`<table class="mn `+this.mn.length+`" cellspacing="0" cellpadding="0">
        <tbody>
            <tr>
                <th colspan="`+this.mn.length+1+`" class="t`+this.thu+`">`+this.showthu()+` <span class="ngay">`+this.ngay+`</span></th>
            </tr>
            <tr>
                <td>Tỉnh</td>
                `+this.tt(this.mn).map(i=>{return "<td>"+i+"</td>"})+`
            </tr>
            <tr>
                <td>Mã </td>
                `+this.mn.map(i=>{return "<td>"+this.kq[i].lv+"</td>"})+`
            </tr>
            <tr>
                <td>Giải tám</td>
                `+this.mn.map(i=>{return "<td>"+this.kq[i][8]+"</td>"})+`
            </tr>
            <tr>
                <td>Giải bảy</td>
                `+this.mn.map(i=>{return "<td>"+this.kq[i][7]+"</td>"})+`
            </tr>
            <tr>
                <td>Giải sáu</td>
                `+this.mn.map(i=>{return "<td>"+this.kq[i][6][0]+`</br>`+this.kq[i][6][1]+`</br>`+this.kq[i][6][2]+"</td>"})+`
            </tr>
            <tr>
                <td>Giải năm</td>
                `+this.mn.map(i=>{return "<td>"+this.kq[i][5]+"</td>"})+`
            </tr>
            <tr>
                <td>Giải tư</td>
                `+this.mn.map(i=>{return "<td>"+this.kq[i][4][0]+`</br>`+this.kq[i][4][1]+`</br>`+this.kq[i][4][2]+`</br>`+this.kq[i][4][3]+`</br>`+this.kq[i][4][4]+`</br>`+this.kq[i][4][5]+"</td>"})+`
            </tr>
            <tr>
                <td >Giải ba</td>
                `+this.mn.map(i=>{return "<td>"+this.kq[i][3][0]+`</br>`+this.kq[i][3][1]+"</td>"})+`
            </tr>
            
           
            <tr>
                <td>Giải nhì</td>
                `+this.mn.map(i=>{return "<td>"+this.kq[i][2]+"</td>"})+`
            </tr>
            <tr>
                <td>Giải nhất</td>
                `+this.mn.map(i=>{return "<td>"+this.kq[i][1]+"</td>"})+`
            </tr>
            <tr>
                <td>Đặc Biệt</td>
                `+this.mn.map(i=>{return "<td>"+this.kq[i][0]+"</td>"})+`
            </tr>
        </tbody>   
    </table>`;
    this.kqmn=this.mn.replace(/,/g, "");
    return this.kqmn;
    }
    
    kqmt(){
        
        this.mt=`<table class="mn `+this.mt.length+`" cellspacing="0" cellpadding="0">
        <tbody>
            <tr>
                <th colspan="`+this.mt.length+1+`" class="t`+this.thu+`">`+this.showthu()+` <span class="ngay">`+this.ngay+`</span></th>
            </tr>
            <tr>
                <td>Tỉnh</td>
                `+this.tt(this.mt).map(i=>{return "<td>"+i+"</td>"})+`
            </tr>
            <tr>
                <td>Mã </td>
                `+this.mt.map(i=>{return "<td>"+this.kq[i].lv+"</td>"})+`
            </tr>
            <tr>
                <td>Giải tám</td>
                `+this.mt.map(i=>{return "<td>"+this.kq[i][8]+"</td>"})+`
            </tr>
            <tr>
                <td>Giải bảy</td>
                `+this.mt.map(i=>{return "<td>"+this.kq[i][7]+"</td>"})+`
            </tr>
            <tr>
                <td>Giải sáu</td>
                `+this.mt.map(i=>{return "<td>"+this.kq[i][6][0]+`</br>`+this.kq[i][6][1]+`</br>`+this.kq[i][6][2]+"</td>"})+`
            </tr>
            <tr>
                <td>Giải năm</td>
                `+this.mt.map(i=>{return "<td>"+this.kq[i][5]+"</td>"})+`
            </tr>
            <tr>
                <td>Giải tư</td>
                `+this.mt.map(i=>{return "<td>"+this.kq[i][4][0]+`</br>`+this.kq[i][4][1]+`</br>`+this.kq[i][4][2]+`</br>`+this.kq[i][4][3]+`</br>`+this.kq[i][4][4]+`</br>`+this.kq[i][4][5]+"</td>"})+`
            </tr>
            <tr>
                <td >Giải ba</td>
                `+this.mt.map(i=>{return "<td>"+this.kq[i][3][0]+`</br>`+this.kq[i][3][1]+"</td>"})+`
            </tr>
            
           
            <tr>
                <td>Giải nhì</td>
                `+this.mt.map(i=>{return "<td>"+this.kq[i][2]+"</td>"})+`
            </tr>
            <tr>
                <td>Giải nhất</td>
                `+this.mt.map(i=>{return "<td>"+this.kq[i][1]+"</td>"})+`
            </tr>
            <tr>
                <td>Đặc Biệt</td>
                `+this.mt.map(i=>{return "<td>"+this.kq[i][0]+"</td>"})+`
            </tr>
        </tbody>   
    </table>`;
    this.kqmt=this.mt.replace(/,/g, "");
    return this.kqmt;
    }
}