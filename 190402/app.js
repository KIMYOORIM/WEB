var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/yoorim', function (req,res) {
  res.sendfile("del.html");
});



app.get('/yoorim1', function (req,res) {
  res.sendfile("for_pra0.html");
});

console.log("running33333");
