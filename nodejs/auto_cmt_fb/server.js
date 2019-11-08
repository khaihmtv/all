const express=require('express')
const app=express()
const port=3000

app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views','./views')



const server=require('http').Server(app)
server.listen(port,(err)=>{if(err){console.log(err)}console.log('App listen port' + port)})
app.get("/",function(req,res){
    res.render("trangchu");
})