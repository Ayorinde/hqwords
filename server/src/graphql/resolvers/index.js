import { products } from '../mockdata';
import GraphQLDate from 'graphql-date';
import CategoryResolvers from './category-resolver';
import UserResolvers from './user-resolvers';
import ServiceResolvers from './service-resolver';
import BookResolvers from './book-resolver';
//import User from '../../models/User';

export default {
    Date: GraphQLDate,
    //   Question: {
    //     user: ({ user }) => User.findById(user),
    //   },

    Query: {
        getService: ServiceResolvers.getService,
        services: ServiceResolvers.getServices,

        getCategory: CategoryResolvers.getCategory,
        getCategories: CategoryResolvers.getCategories,
        books: BookResolvers.books,
        userBooks: BookResolvers.userBooks,

        me: UserResolvers.me,
    },
    Mutation: {
        signup: UserResolvers.signup,
        login: UserResolvers.login,

        createService: ServiceResolvers.createService,
        createCategory: CategoryResolvers.createCategory,
        createBook: BookResolvers.createBook,

    }
}