import express from 'express';
import cors from 'cors';

import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs } from './graphql/schema';
import resolvers from './graphql/resolvers';

import './db';

import middlewares from './middlewares';

const app = express()
const port = 3000

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(middlewares.auth)

app.get('/', (req, res) => res.send('Hello World!', req.user.name))


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
        user: req.user
    })
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)