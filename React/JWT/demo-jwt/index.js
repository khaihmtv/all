const express = require('express');
const users = require('./users.json');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bodyParser=require('body-parser')
const cors = require('cors')
const path=require('path')

const app = express();
const port = 3000;
const SECRET = 'shhh';

//app.use(express.json()) // for parsing application/json
app.use(cookieParser()) //cookie-parser dùng để đọc cookies của request:
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/auth/login', (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        console.log('body>>', req.body);
        if(email !== 'e' || password !== 'p'){
            res.status(400);
            throw new Error('invalid infor')
        }
        const payload = {
            email: email
        }
        const token = jwt.sign(payload, SECRET);
        
        res.cookie('access_token', token, {
            maxAge: 3000,
            httpOnly: true,
            // secure: true;
        })
        let a=new Date().getTime()
        a.toString().slice(0,-3)
        res.status(200).send({email,password,time:a})

    
})


app.use('/api/users', (req, res) => {
    const token = req.cookies.access_token;

    console.log('cookie>>>', token);
    try{
        let a=Object.create(null)
        decoded = jwt.verify(token, SECRET);
        res.status(200).json(decoded);
        console.log(decoded)
    }catch(err){
        res.status(400)
        throw err;
    }
    
})
app.use(express.static(path.join(__dirname, 'client')));
app.use((err, req, res, next)=> {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
})

app.listen(port, () => {
    console.info(`listening on port ${port}`);
})