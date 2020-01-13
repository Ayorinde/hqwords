import Category from '../../models/Category';
import { getUserObj } from '../../services/auth';

export default {
    getCategory: async (_, { _id }, { user }) => {
        try {
            await getUserObj(user);
            return Category.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getCategories: async (_, args, { user }) => {
        try {
            //await getUserObj(user);
            return Category.find({}).sort({ createdAt: -1 })
        } catch (error) {
            throw error;
        }
    },
    createCategory: async (_, args, { user }) => {
        try {
            await getUserObj(user);
            return Category.create({ ...args, user: user._id });
        } catch (error) {
            throw error;
        }
    },
}