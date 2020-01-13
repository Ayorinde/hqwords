import mongoose, { Schema } from 'mongoose';

const TagSchema = new Schema({
    name: {
        type: String
    },

}, { timestamps: true });

export default mongoose.model('Tag', TagSchema);