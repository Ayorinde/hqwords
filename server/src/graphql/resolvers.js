import { products } from './mockdata';
export const resolvers = {
    Query: {
        products: () => products,
    },
};