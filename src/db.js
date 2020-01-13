import mongoose from 'mongoose';

import constants from './constants';

mongoose.Promise = global.Promise;

mongoose.set('debug', true); // debug mode on

try {
    console.log('___-----------; ', process.env.MONGO_URL)
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true });
} catch (err) {
    mongoose.createConnection(constants.DB_URL);
}

mongoose.connection
    .once('open', () => console.log('MongoDB Running yo!'))
    .on('error', e => {
        console.log('Could not connect to mongo. Error: ', e.message)
        throw e;
    });