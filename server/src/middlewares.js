import { verifyToken } from './services/auth';

async function auth(req, res, next) {
    try {
        const token = req.headers.authorization;
        if (token && (token.length > 10)) {
            const user = await verifyToken(token);
            req.user = user;
            console.log('user: ', user)
        } else {
            req.user = null;
        }
        return next();
    } catch (error) {
        console.log('error in auth verification: ', error.message);
        throw error;
    }
}

export default {
    auth
}