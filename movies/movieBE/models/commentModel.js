const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    authorName:{
        type:String,
        require: true
    },
    content:{
        type:String,
        require: true
    }
});

module.exports = mongoose.model('Comment',commentSchema);