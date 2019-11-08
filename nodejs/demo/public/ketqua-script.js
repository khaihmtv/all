$('document').ready(function() {
    var socket=io.connect("http://localhost:3000/ketqua")

    socket.on('ketqua', function(data) {
        $('#id').click(()=>{console.log('send'); socket.emit('s','lll')})
    })
})