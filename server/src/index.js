import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)