import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

/*-------------------------------------
 *              TYPEDEFS
 *------------------------------------ */


// Tipos de datos que se pueden consultar desde una API Graphql
var typeDefs = [`
type Query {
  hello: String
  greet(name: String!): String
  Users: [User]
  kq(where:Int,skip:Int,limit:Int):[Kq]
  tansuat(tinh:String!,songay:Int!):[String]
  tong(tinh:String!,songay:Int!):[String]
  logan(tinh:String!,songay:Int!):[String]
  bangtk(tinh:String!,songay:Int!):[[String]]
}
type Kq {
  time:String!
  thu:Int!
  matinh:[String]!
  kqmn:[String]!
  kqmt:[String]!
  kqmb:[String]!
}
type Mutation {
  createUser(input: UserInput): User,
  deleteUser(_id: ID): User,
  updateUser(_id: ID, input: UserInput): User
}

type User {
  _id: ID,
  firstName: String!,
  lastName: String,
  age: Int
}

input UserInput{
  firstName: String!,
  lastName: String,
  age: Int
}
`];
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});