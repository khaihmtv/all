const { GraphQLServer } = require('graphql-yoga')

// 1
const typeDefs = `
type Query {
  sum(a:Int!,b:Int!): Int!
}
`

// 2
const resolvers = {
  Query: {
   sum: (root, args) => { return (args.a + args.b) },
  }
}

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
