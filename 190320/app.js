var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);



app.get('/yoorim', function (req,res) {
  res.sendfile("table.html");
});

app.get('/yoorim1', function (req,res) {
  res.sendfile("todo.html");
});

app.get('/yoorim2', function (req,res) {
  res.sendfile("del.html");
});


console.log("running33333");
