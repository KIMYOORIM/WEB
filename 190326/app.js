var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);



app.get('/yoorim15', function (req,res) {
  res.sendfile("cssClass.html");
});

app.get('/yoorim16', function (req,res) {
  res.sendfile("js.html");
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
