import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import * as constants from './../constants/localsaves'

const cache = new InMemoryCache();

const userStringified = localStorage.getItem(`${constants.APP_NAMESPACE}:user`);
console.log('userStringified: ', userStringified)
const userLocal = userStringified ? JSON.parse(userStringified) : {};
const { token } = userLocal;
console.log('userLocal: ', userLocal)
console.log('token in configure: ', token);

const link = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    headers: {
        authorization: token ? `Bearer ${token}` : null
    },
})

cache.writeData({
    data: {
        isLoggedIn: !!token,
        user: userLocal,
    },
});

const client = new ApolloClient({
    cache,
    link
})

console.log('client: ', client);

export default {
    client
}