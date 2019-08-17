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
            return Book.find({}).sort({ createdAt: -1 })
        } catch (error) {
            throw error;
        }
    },
    createBook: async (_, args, { user }) => {
        try {
            await getUserObj(user);
            return Book.create({ ...args, user: user._id });
        } catch (error) {
            console.log('error creating service: ', error.message)
            throw error;
        }
    },
}