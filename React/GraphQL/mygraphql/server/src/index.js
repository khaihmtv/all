//import typeDefs from './schema';
//import resolvers from './resolvers'

import { connect } from './db'

const { find, filter } = require('lodash');
const { ApolloServer, gql } = require('apollo-server');
/*
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
  type Mutation {
    addBook(input:BookInput): Book,
  }
  input BookInput { 
    title: String!,
    author: String,
  }
`;
const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation:{
    addBook: (_,{input}) => {
      books.push(input)
      return input;
    },
  }
};
*/


const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    books: [Book]
  }

  type Query {
    author: Author
  }
`;

const resolvers = {
  Query: {
    author(parent, args, context, info) {
      return find(authors, { id: args.id });
    },
  },
  Author: {
    books(author) {
      return filter(books, { author: author.name });
    },
  },
};
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];



const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});