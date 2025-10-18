const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
type Query {
  appName: String
}
`

const resolvers = {
  Query: {
    appName: () => 'ProductHunt'
  },
}

const server = new ApolloServer({
  typeDefs, // schema for our GraphQL API
  resolvers, // implementation of queries and types
})

server.listen().then(() => {
  console.log('Listening on port 4000')
})