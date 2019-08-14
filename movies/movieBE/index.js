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
global.io = require('socket.io').listen(server);
global.validator = require('validator');
