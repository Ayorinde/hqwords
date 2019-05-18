import jwt from 'jsonwebtoken';

import constants from '../constants';
import User from '../models/User';

export async function getUserObj(user) {

    console.log('in getUserObj: ', user);

    if (!user || !user._id) {
        throw new Error('Unauthorized!');
    }
    console.log('found user befor findById')
    let me;
    try {
        me = await User.findById(user._id);
        console.log('found user after findById: ', me)

    } catch (error) {
        console.log('error in findById: ', error.message)
        console.log('error: ', error);

    }




    if (!me) {
        throw new Error('Unauthorized!');
    }

    return me;
}

export function verifyToken(token) {
    console.log('token: '); console.log(token);
    const arr = token.split(' ');
    if (arr[0] === 'Bearer') {
        const verifyTokenResult = jwt.verify(arr[1], constants.JWT_SECRET);
        console.log('verifyTokenResult: ', verifyTokenResult);
        return verifyTokenResult;
    }

    throw new Error('Token not valid!');
}
