var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


app.get('/yoorim', function (req,res) {
  res.sendfile("190416_4.html");
});

console.log("running33333");