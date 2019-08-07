const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:Aa123456!@cluster0-vjdko.mongodb.net/movieDB?retryWrites=true";
mongoose.connect(uri,{useNewUrlParser: true});
var db = mongoose.connection;
db.on('error',console.error.bind('mongo connection error:'));