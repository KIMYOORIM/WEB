var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/', function (req,res) {
  res.send("main page");
});


app.get('/123', function (req,res) {
  res.send("running home.");
});


app.get('/yoorim', function (req,res) {
  res.sendfile("dog.jpg");
});


app.get('/yoorim2', function (req,res) {
  res.sendfile("rawfile");
});

app.get('/yoorim3', function (req,res) {
  res.sendfile("cat.jpg");
});

app.get('/yoorim4', function (req,res) {
  res.sendfile("ben.gif");
});

app.get('/yoorim5', function (req,res) {
  res.sendfile("ss123.gif");
});

app.get('/yoorim6', function (req,res) {
  res.sendfile("hello.html");
});

app.get('/yoorim0', function (req,res) {
  res.sendfile("hi.html");
});

app.get('/yoorim9', function (req,res) {
  res.sendfile("join.html");
});

console.log("running33333");
