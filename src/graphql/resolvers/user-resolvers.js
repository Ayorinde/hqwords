import User from '../../models/User';
import { getUserObj } from '../../services/auth';

export default {
    signup: async (_, { fullName, ...rest }) => {
        try {
            const [firstName, lastName] = fullName.split(' ');
            console.log('lastname: ', lastName)
            const user = await User.create({ firstName, lastName, ...rest });

            return {
                token: user.createToken(),
            };
        } catch (error) {
            throw error;
        }
    },

    login: async (_, { email, password }) => {
        try {
            const user = await User.findOne({ email });

            if (!user) {
                throw new Error('User not exist!');
            }

            if (!user.comparePassword(password)) {
                throw new Error('Password not match!');
            }

            return {
                token: user.createToken()
            };
        } catch (error) {
            throw error;
        }
    },

    me: async (_, args, { user }) => {
        try {
            const me = await getUserObj(user);

            return me;
        } catch (error) {
            throw error;
        }
    },
};