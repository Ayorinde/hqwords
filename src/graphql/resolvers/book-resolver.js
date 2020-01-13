import Book from '../../models/Book'
import { getUserObj } from '../../services/auth';

export default {
    book: async (_, { _id }, { user }) => {
        try {
            return Book.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    books: async (_, args, { user }) => {
        try {
            console.log('getin books ..')
            return Book.find({}).sort({ createdAt: -1 })
        } catch (error) {
            throw error;
        }
    },
    userBooks: async (_, args, { user }) => {
        try {
            await getUserObj(user);
          return Book.find({ user: user._id }).sort({ createdAt: -1 })
        } catch (error) {
            console.log('error getting user books: ', error.message)
          throw error;
        }
      },
    createBook: async (_, { input: args }, { user }) => {
        try {
            console.log('user in create book: ', user)
            console.log('args: ', args)
            await getUserObj(user);
            return Book.create({ ...args, author: user._id });
        } catch (error) {
            console.log('error creating book: ', error.message)
            throw error;
        }
    },
}