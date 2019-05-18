const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
import jwt from 'jsonwebtoken';

import constants from '../constants';

const salt = bcrypt.genSaltSync(10);

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        //required: true,
        minlength: 2,
        maxlength: 50
    },
    lastName: {
        type: String,
        //required: true,
        minlength: 2,
        maxlength: 50
    },

    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        //required: true,
        minlength: 3,
        maxlength: 1024
    },
    facebookId: String,
    facebookTokens: Array,
    googleId: String,
    userImage: String,
    role: String, //this should be role: RoleId and RoleName
    fullName: String,
    username: String,
    gender: String,
},
    {
        timestamps: true
    }
);

userSchema.pre("save", function (next) {
    if (this.isModified("password")) {
        this.password = this._hashPassword(this.password);
        return next();
    }

    return next();
});

userSchema.methods = {
    _hashPassword(password) {
        return bcrypt.hashSync(password, salt);
    },
    comparePassword(password) {
        return bcrypt.compareSync(password, this.password); //compareSync(password, this.password);
    },

    createToken() {
        return jwt.sign(
            {
                _id: this._id, isAdmin: false
            },
            constants.JWT_SECRET
        );
    }
};


const User = mongoose.model('User', userSchema);
export default User; 
