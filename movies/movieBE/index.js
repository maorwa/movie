var dbAccessor = require("./db/dbAccessor");
const ROUTES = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.all("*",(req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, Origin, Accept');
    next();
});

app.use("/api", ROUTES);

var server = app.listen(3001);
var io = require('socket.io').listen(server);

io.on('connection', function(socket){
  io.emit('emitting','test');
  socket.on('postCreated', function(){
    io.emit('refreshPostPage');  
  });
});

