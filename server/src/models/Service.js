import mongoose, { Schema } from 'mongoose';

const ServiceSchema = new Schema({
    name: {
        type: String
    },
    description: { type: String },
    icon: { type: String },
    thumbnail: { type: String },
    bannerImage: { type: String },

}, { timestamps: true });

export default mongoose.model('Service', ServiceSchema);