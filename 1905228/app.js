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

app.get('/timer', function(req, res) {
  res.sendfile("time.html");
});
//--------------------------------------------------------------------------------------
app.get('/flightform', function(req, res) {
  res.sendfile("flight.html");
});
app.get('/flight2', function(req, res) {
  res.sendfile("flight2.html");
});
app.get('/flight3', function(req, res) {
  res.sendfile("flight3.html");
});
// ------------------------------------------insert--------------------------------------
app.post('/insertflight', function(req, res) {
  var flightName = String(req.body.flightName);
  var aircraftCode = String(req.body.aircraftCode);
  var departure = String(req.body.departure);
  var arrival = String(req.body.arrival);
  var departTime = String(req.body.departTime);
  var arrivalTime = String(req.body.arrivalTime);
  var insertQuery = `INSERT INTO flight(flightName,aircraftCode,departure,arrival,departTime,arrivalTime) VALUES
   ('${flightName}','${aircraftCode}','${departure}','${arrival}','${departTime}','${arrivalTime}')`;

  connection.query(insertQuery,
    function(err, rows, fields) {
      res.send(rows);
    })
});
// ------------------------------------------select-------------------------------------
app.get('/getFlightList', function(req, res) {
  var selectQuery = `select * from flight`;
  connection.query(selectQuery,
    function(err, rows, fields) {
      if (err) throw err;
      console.log(rows);
      res.send(rows);
    }
  )
});
//------------------------------------------no별 delete-------------------------------------------

app.get('/deleteflightWithNo', function(req, res) {
  var deleteOneQuery = `delete from flight where no = "${req.query.no}"`;
  connection.query(deleteOneQuery,
    function(err, rows, fields) {
      res.send(rows);
    })
});
//------------------------------------------flight end-------------------------------------------
//----------------------------------------insertaircraft------------------------------------------
app.post('/insertaircraft', function(req, res) {
  var aircraftName = String(req.body.aircraftName);
  var aircraftCode = String(req.body.aircraftCode);
  var seats = String(req.body.seats);
  var insertQuery = `INSERT INTO aircraft (aircraftCode,aircraftName,seats) VALUES
   ('${aircraftCode}','${aircraftName}','${seats}')`;

  connection.query(insertQuery,
    function(err, rows, fields) {
      res.send(rows);
    })
});
// ------------------------------------------selectaircraft-------------------------------------
app.get('/getaircraftList', function(req, res) {
  var selectQuery = `select * from aircraft`;
  connection.query(selectQuery,
    function(err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  )
});
//------------------------------------------no별 delete-------------------------------------------

app.get('/deleteaircraftWithNo', function(req, res) {
  var deleteOneQuery = `delete from aircraft where no = "${req.query.no}"`;
  connection.query(deleteOneQuery,
    function(err, rows, fields) {
      res.send(rows);
    })
});
// //----------------------------------------- 데이터합치기 -------------------------------------------
app.get('/mergelist', function(req, res) {
  var mergelist = `SELECT * FROM flight AS f LEFT OUTER JOIN aircraft AS a ON f.no = a.no`;
  connection.query(mergelist,
    function(err, rows, fields) {
      res.send(rows);
      console.log(rows)
    })
});
