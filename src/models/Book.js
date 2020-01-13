import mongoose, { Schema } from 'mongoose';

//title,description,artwork,price/category, author,authors,tags
const BookSchema = new Schema({
    title: {
        type: String
    },
    description: { type: String },
    artwork: { type: String },
    price: { type: String },
    authorName: { type: String },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    authors: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }],

}, { timestamps: true });

export default mongoose.model('Book', BookSchema);