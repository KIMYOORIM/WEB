var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);



app.get('/yoorim15', function (req,res) {
  res.sendfile("js0.html");
});

app.get('/yoorim123', function (req,res) {
  res.sendfile("del.html");
});

app.get('/yoorim17', function (req,res) {
  res.sendfile("js2.html");
});

app.get('/yoorim19', function (req,res) {
  res.sendfile("js3.html");
});

app.get('/yoorim20', function (req,res) {
  res.sendfile("js0.html");
});

console.log("running33333");
