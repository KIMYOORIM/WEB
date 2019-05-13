var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


app.get('/yoorim', function(req, res) {
  res.sendfile("중간고사 수정.html");
});

console.log("running33333");

app.get('/getCarPrice', function(req, res) {
  var userSelected1 = req.query.selectBox1;
  console.log(userSelected1)
  var userSelected2 = req.query.selectBox2;
  console.log(userSelected2)
  var a;
  var b;
  var c;
  var price1 = [{
      name: "현대",
      price: "2100"
    },
    {
      name: "기아",
      price: "1300"
    },
    {
      name: "쌍용",
      price: "1500"
    },
    {
      name: "벤츠",
      price: "3500"
    },
    {
      name: "bmw",
      price: "3200"
    }
  ];
  console.log(price1);
  var price2 = [{
      name: "빨강",
      price: "100"
    },{
      name: "파랑",
      price: "120"
    },
    {
      name: "초록",
      price: "200"
    },
    {
      name: "노랑",
      price: "130"
    },
    {
      name: "검정",
      price: "80"
    }
  ];
  console.log(price2);

  for (var i = 0; i < price1.length; i++) {
    if (price1[i].name == userSelected1) {
      console.log(price1[i].price);
      a = Number(price1[i].price);
    }
  }
  for (var i = 0; i < price2.length; i++) {
    if (price2[i].name == userSelected2) {
      console.log(price2[i].price);
      b = Number(price2[i].price);
    }
  }
  c = a + b;
  console.log(c);
  res.send(String(c)); //send할때 숫자를 보낼 수 없다.
});

//  //수업 인덱스로 찾아가게 하는 방법----> value를 0,1,2,3,4로 했을경우.
// app.get('/getCarPrice', function(req, res) {
//   var userSelected1 = req.query.selectBox1;
//   var userSelected2 = req.query.selectBox2;
//   var carprice = [2100,1300,1500,3500,3200];
//   var colorprice = [100,200,300,400,500]
//   res.send(carprice[userSelected1] + colorprice[userSelected2] + "만원"); //send할때 숫자를 보낼 수 없다.
// });


app.get('/getform', function(req, res) {
  res.sendfile("selectbox.html")
});

app.get('/animal2', function(req, res) {
  res.sendfile("anima2.html")
});

app.get('/animal3', function(req, res) {
  res.sendfile("animal3.html")
});
