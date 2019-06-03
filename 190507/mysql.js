var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var mysql = require('mysql')
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'webiu'
});

app.get('/select', function(req, res) { //계속 쓸거니까 복붙해
  var selectQuery = `select * from news`;
  connection.query(selectQuery, //데이터베이스에 쓰고싶은 쿼리, 그 다음 실행 될 함수  selectQuery는 실행 후 대기
    function(err, rows, fields) { //rows가 쿼리 실행결과다.
      if (err) throw err;
      console.log(rows);
      res.send(rows);
    }
  )
});

//여기부터 0514
app.get('/select', function(req, res) { //계속 쓸거니까 복붙해
  var no = req.query.no
  var selectQuery = `select * from news where ${no}`;
  console.log(selectQuery);
  connection.query(selectQuery, //데이터베이스에 쓰고싶은 쿼리, 그 다음 실행 될 함수  selectQuery는 실행 후 대기
    function(err, rows, fields) { //rows가 쿼리 실행결과다.
      res.send(rows);
    }
  )
});

app.get('/form', function(req, res) { //계속 쓸거니까 복붙해
  res.sendfile("html.html");
});

app.get('/dbSelectTest', function(req, res) { //계속 쓸거니까 복붙해
  var selectQuery = `select * from news`;

  connection.query(selectQuery, //데이터베이스에 쓰고싶은 쿼리, 그 다음 실행 될 함수  selectQuery는 실행 후 대기
    function(err, rows, fields) { //rows가 쿼리 실행결과다.

      res.send(rows);
    });
});

//뉴스불러오기

app.get('/newsform', function(req, res) { //계속 쓸거니까 복붙해
  res.sendfile("newList.html");
});


app.get('/newList', function(req, res) { //계속 쓸거니까 복붙해
  var selectQuery = `select * from news`;
  console.log("stringtest")

  connection.query(selectQuery, //데이터베이스에 쓰고싶은 쿼리, 그 다음 실행 될 함수 selectQuery는 실행 후 대기
    function(err, rows, fields) {
      var title;
      var text;
      var total = "";
      for (var i = 0; i < rows.length; i++) {
        title = rows[i].title
        console.log(rows[i].title)
        text = rows[i].text
        console.log(String(title))
        console.log(String(text))
        total = total + title + ":" + text + "<br>"
      }
      res.send(total);
    });
});

//db insert하기
app.get('/insert', function(req, res) {
  res.sendfile("dbinsert.html");
});
//화면띄우기
app.post('/newList1', function(req, res) {
  var num2 = String(req.body.title);
  var num1 = String(req.body.text);
  var selectQuery = `INSERT INTO NEWS (title,text) VALUES ('${num1}','${num2}')`;

  connection.query(selectQuery,
    function(err, rows, fields) {
      res.send(rows);
    });

  var selectQuery2 = `select * from news`;
  connection.query(selectQuery2,
    function(err, rows, fields) {
      var title;
      var text;
      var total = "";
      for (var i = 0; i < rows.length; i++) {
        title = rows[i].title
        console.log(rows[i].title)
        text = rows[i].text
        console.log(String(title))
        console.log(String(text))
        total = total + title + ":" + text + "<br>"
      }
      res.send(total);
    });
});

//delete
app.get('/newsDelete', function(req, res) {
  res.sendfile("newDelete.html");
});


app.post('/newsDeleteForm', function(req, res) {
  var selectQuery3 = `delete from news`;
  connection.query(selectQuery3,
    function(err, rows, fields) {
      res.send(rows);
    });
});

//test인덱스로지우기 --------0521--------------------
app.get('/test', function(req, res) {
  res.sendfile("test.html");
});


//---------------------------------------test 3
app.get('/newinsert', function(req, res) {
  res.sendfile("dbinsert.html");
});

app.post('/newinsert0521', function(req, res) {
  var num2 = String(req.body.title);
  var num1 = String(req.body.text);

  var selectQuery = `INSERT INTO NEWS (title,text) VALUES ('${num1}','${num2}')`;
  connection.query(selectQuery,
    function(err, rows, fields) {
      res.send(rows);
    })
});
//-------------------------되나보자
app.get('/deleteNewsWithNo', function(req, res) {
        var selectQuery3 = `delete from news where no = ${req.query.no}`;
      connection.query(selectQuery3,
        function(err, rows, fields) {

          res.send(rows);
        })
      });
