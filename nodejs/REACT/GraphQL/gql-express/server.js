import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import { readFile } from 'fs';
const app = express();
import bodyParser from 'body-parser';
import _ from 'lodash';
import { url } from 'inspector';

const schema = buildSchema(`
  type Query {
    ip: String
  }
`);
const users=[
  {
    id:'a123',
    name:'A'
  },
  {
    is:'b456',
    name:'B'
  }
]
function loggingMiddleware(req, res, next) {
  if(!req.userID){
    if(req.body.user){
      users.map((v,i)=>{
        if(v.id==req.body.user){
          req.userID=v.id
        }
      })
      if(req.userID){
        res.redirect('/')
      }else{
        res.send("Khong dung")
      }
    }else{
      res.redirect('/user/login')
    }
  }else{
    res.redirect('/')
  }

  next();
}
var root = {
  ip: function (args, request) {
    return request.ip;
  }
};


app.get('/user/login',(req,res,next)=>{
    readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/user/login',loggingMiddleware);
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
