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
//-------------------------------------select---------------------------------------------------------

app.get('/form', function(req, res) {
  res.sendfile("newsService.html");
});

app.get('/getNewsList', function(req, res) {
  var selectQuery = `select * from news`;
  connection.query(selectQuery,
    function(err, rows, fields) {
      if (err) throw err;
      console.log(rows);
      res.send(rows);
    }
  )
});
//-----------------------------------------insert-----------------------------------------------

app.post('/insertNewsList', function(req, res) {
  var title = String(req.body.title);
  var text = String(req.body.text);
  var writer = String(req.body.writer);
  var insertQuery = `INSERT INTO NEWS (title,text,writer) VALUES ('${title}','${text}','${writer}')`;

  connection.query(insertQuery,
    function(err, rows, fields) {
      res.send(rows);
    })
});
//------------------------------------------delete-------------------------------------------

app.post('/deleteNewsList', function(req, res) {
  var deleteAllnews = `delete from news`;
  connection.query(deleteAllnews,
    function(err, rows, fields) {
      res.send(rows);
    })
});

//------------------------------------------no별 delete-------------------------------------------

app.get('/deleteNewsWithNo', function(req, res) {
  var deleteOneQuery = `delete from news where no = "${req.query.no}"`;
  connection.query(deleteOneQuery,
    function(err, rows, fields) {
      res.send(rows);
    })
});
//------------------------------------------수정------------------------------------------
//수정하는쿼리
app.post('/modifyOneNews', function(req, res) {
  var deleteOneQuery = `update news set title = "${req.body.title}", text = "${req.body.text}" where no = ${req.body.no}`;
  connection.query(deleteOneQuery,
    function(err, rows, fields) {
      res.send(rows);
    })
});


app.get('/modifyForm', function(req, res) {
  res.sendfile("modify.html");
});
//------------------------------------------작성자 -------------------------------------
