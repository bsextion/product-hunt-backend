const { ApolloServer, gql } = require('apollo-server')
const { readSchema } = require('./schema.js')
const { resolvers } = require('./resolvers.js')

const typeDefs = readSchema()

const server = new ApolloServer({
  typeDefs, // schema for our GraphQL API
  resolvers, // implementation of queries and types
})

server.listen().then(() => {
  console.log('Listening on port 4000')
})