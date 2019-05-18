import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:4000/graphql'
})
const client = new ApolloClient({
    cache,
    link
})

console.log('client: ', client);

export default {
    client
}