const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    authorName: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    content: { type: String, required: true },
    imageURL: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    movie: { type: Schema.Types.ObjectId, ref: 'Movie' },
});

module.exports = mongoose.model('Post',postSchema);