const express=require('express')
const app=express()
const bodyParser=require('body-parser')

app.set('view engine','ejs')
app.set('views','./')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',(req,res)=>{
    res.render('homepage')
    console.log(req)
})



app.listen(3000,()=>{console.log('running...')})