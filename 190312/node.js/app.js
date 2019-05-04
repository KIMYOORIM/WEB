var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/', function (req,res) {
  res.send("main page"); //send하면 글자 자체를 보낸다.
});


app.get('/hi', function (req,res) {
  res.sendfile("hi.html"); //sendfile, 파일종류 써줘야 함.
});


app.get('/hello', function (req,res) {
  res.sendfile("hello.html");
});


app.get('/yoorim2', function (req,res) {
  res.sendfile("rawfile");
});

console.log("running33333");
