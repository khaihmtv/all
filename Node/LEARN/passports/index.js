const express=require('express')
const bodyParser=require('body-parser')
const Passport=require('passport')
const localStrategy=require('passport-local').Strategy
const fs=require('fs')
const session=require('express-session')
const app=express()
app.set('views','./views')
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({ extended:false }))
app.use(session({secret:'halt'}))
app.use(Passport.initialize())
app.use(Passport.session())

app.get("/",function(req, res){
    res.render("trangchu");
})
app.route("/login")
.get(function(req, res){
    res.render("login");
})
.post(Passport.authenticate('local',{failureRedirect:'/login',
successRedirect:'/loginok'}))
Passport.use(new localStrategy(
    (username,password,done)=>{

    }
))
Passport.serializeUser((user,done)=>{
    done(null,user.usr)
})
Passport.deserializeUser((name,done)=>{
        fs.readFile('./db.json',(err,data)=>{
            const db=JSON.parse(data)
            let ur=db.find(user=>user.usr==username)
            if(ur && ur.pass==password){
                return done(null,ur)
            }else{
                return done(null,false)
            }
        })
})

app.listen(3000,()=>{console.log('server dang hoat dong tren port 3000 ....')})

