var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3000;
var app = express();

global.base = __dirname;
app.use("/", express.static(__dirname + "/dist"));

app.listen(port);
console.log("Started on port", port);