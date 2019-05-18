import Service from '../../models/Service';
import { getUserObj } from '../../services/auth';

export default {
    getService: async (_, { _id }, { user }) => {
        try {
            await getUserObj(user);

            return Service.findById(_id);
        } catch (error) {

            throw error;
        }
    },
    getServices: async (_, args, { user }) => {
        try {
            //await getUserObj(user);
            return Service.find({}).sort({ createdAt: -1 })
        } catch (error) {
            throw error;
        }
    },
    createService: async (_, args, { user }) => {
        try {
            await getUserObj(user);
            return Service.create({ ...args, user: user._id });
        } catch (error) {
            console.log('error creating service: ', error.message)
            throw error;
        }
    },
}