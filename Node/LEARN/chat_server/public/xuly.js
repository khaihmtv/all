var sockets=io("http://localhost:3000");
sockets.on("thatbai",function(){
   alert("That bai ");
});
sockets.on("thanhcong",function(data){
    $("#uu").html(data);
    $("#login").hide(2000);
    $("#chat").show(1000);
});
sockets.on("new",function(data){
    $("#usero").html("");
    data.forEach(function(i){
        $("#usero").append("<div>" + i + "</div>");
    });
});
sockets.on("nd",function(data){
    $("#content").append("<div> "+ data.u+" : "+ data.n +" </div>");
});
$(document).ready(function(){
    $("#login").show(1000);
    $("#chat").hide(0);

    $("#ok").click(function(){
        sockets.emit("send-ok",$("#user").val());
    });

    $("#logout").click(function(){
        sockets.emit("out");
        $("#login").show(1000);
        $("#chat").hide(0);
    });

    $("#gui").click(function(){
        sockets.emit("gui",$("#message").val());
    });


});