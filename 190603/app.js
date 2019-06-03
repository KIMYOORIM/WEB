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

//--------------------------------------------------------------------------------------
app.get('/ajax', function(req, res) {
  res.sendfile('ajax.html');
});

var request = require('request');

// app.get('/requestTest', function(req, res) {
//
//   request.get(`https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:034020|SERVICE_RECENT_ITEM:034020`,
//     function(err, response, body) {
//       body = JSON.parse(body);
//       res.send(body.result.areas[1].datas[0].nv + "");
//     });
// });
//--------------------------------------------------------------------------------------
// 종목을 하나 선택하여 1초에 한번씩 주식 가격 데이터를 받아와서 데이터 베이스에 시간, 가격을 저장.
app.get('/requestTest', function(req, res) {
  request.get(`https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:034020|SERVICE_RECENT_ITEM:034020`,
    function(err, response, body) {
      body = JSON.parse(body);
      var price = (body.result.areas[1].datas[0].nv + "");
      console.log(price)
      // res.send(body.result.areas[1].datas[0].nv + "");
  var insertQuery = `INSERT INTO time(price) VALUES ('${price}')`;
  connection.query(insertQuery,
    function(err, rows, fields) {
      res.send(rows);
    });
    });
      });
//--------------------------------------------------------------------------------------
// 2
var request = require('request');
setInterval(function() {
request.get(`https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:034020|SERVICE_RECENT_ITEM:034020`,
function(err, response, body) {
      body = JSON.parse(body);
  var price = (body.result.areas[1].datas[0].nv + "");
  var insertQuery = `INSERT INTO time(price) VALUES ('${price}')`;
  connection.query(insertQuery,
    function(err, rows, fields) {
      if (err) throw err;
    }
  );
    });
  },1000);
