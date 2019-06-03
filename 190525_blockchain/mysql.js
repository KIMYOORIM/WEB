var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost'
  , port: 3306
  , user:'root'
  , password: 'root'
  , database:'yoorim'
});
// ---------------------------------------db저장
   app.post("/signinform", function(req, res){
   // var req1 = req.body;
   console.log(req.getParameter("id"));


//    connection.connect();
// //조회테스트
// var sql = `INSERT INTO userinfo (NAME,DOB,ID,PW,ANSWER,SEX) VALUES ('김유림','19950406','kyo9721','951006','78','88','45','88')`; //로그인 된 이메일정보만 출력
// connection.query(sql, function (err, rows, fields) {
//   if (err) console.log(err);
//   console.log('rows', rows); //내가 조회한 정보 출력
// });
// connection.end();
 });
//---------------------------------------db저장


app.get('/', function (req, res) {
  res.sendfile('inquire.html');
});
app.get('/signin', function (req, res) {
  res.sendfile('signin.html');
});
app.get('/id', function (req, res) {
  res.sendfile('id.html');
});
app.get('/inquire', function (req, res) {
  res.sendfile('Inquire.html');
});

app.get('/signinform', function (req, res) {

// db저장쿼리
  res.sendfile('id.html');
});
app.get('/select', function(req, res) {
  var selectQuery = `select * from news`;
  connection.query(selectQuery,
  function (err,rows,fields) {
    if (err) throw err;
    console.log(rows);
    res.send(rows);
  }
)
});
