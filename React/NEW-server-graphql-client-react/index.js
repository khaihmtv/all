import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './src/schema';
import { readFile } from 'fs';
import bodyParser from 'body-parser'
import path from 'path'
require('dotenv').config()
import cors from 'cors'

require('./src/models').default.default

let port = 5000;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api',(req,res,next)=>{
})

app.use('/graphql',cors(), graphqlHTTP({
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