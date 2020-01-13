import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './src/schema';
import { readFile } from 'fs';
import bodyParser from 'body-parser'
import path from 'path'
require('dotenv').config()
import cors from 'cors'
import db from './src/models'
import Tut from './src/models/Tut'

let port = 5000;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('This is api')
})

app.use(cors())
app.post('/api',(req,res,next)=>{
    if(req.body.type && req.body.title && req.body.content && req.body.path)
    {
        Tut.create(req.body,(e,r)=>{
            e?res.send('Error create: '+e):res.send('Create Success')
        })  
    }else{
        res.send('Thieu du lieu create ==>'+req.body)
    }
    
})
app.put('/api',(req,res,next)=>{
    if(req.body.type && req.body.title && req.body.content && req.body.path)
    {
        Tut.updateOne({path:req.body.path},(e,r)=>res.send(e?"Error update"+e:"Update Success"+r))  
    }else{
        res.send('Thieu du lieu update ==>'+req.body)
    }
    
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
}));

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')))

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}