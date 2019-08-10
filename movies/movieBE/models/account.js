const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    email:{
        type: String,
        require: true,
        unique: true
    },
    name:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    isAdmin:{
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('account',accountSchema);