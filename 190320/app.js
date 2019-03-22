var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);



app.get('/yoorim15', function (req,res) {
  res.sendfile("cssClass.html");
});

console.log("running33333");
