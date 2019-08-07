const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new Schema({
    name:{
        type: String,
        require: true,
        unique : true
    },
    address:{
        type:String,
        require: true
    }
});

module.exports = mongoose.model('Map',mapSchema);