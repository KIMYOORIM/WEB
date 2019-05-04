var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


app.get('/yoorim', function(req, res) {
  res.sendfile("중간고사 수정.html");
});

console.log("running33333");


//sumform이라는라우터를 만들어 요청을 보내보겠다.
//피라미터값을 편하게  url에 바로 입력하는개념이라고 생각해.
//화면에 바로 출력.
//이렇게 계산식, 소스 같은게 콘솔에 바로 나오면 보안이 위험할 수 있잖아 그래서 여기써주는거야.
app.get('/sum', function(req, res) {
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  var num3 = Number(req.query.num3);
  console.log(num1, num2, num3);
  res.send(`result is ${num1 * num2 * num3}`)
});

//얘는 계산만 하는 서버.
//요청이들어오면 순수하게 응답보내는 애들이야.
app.get('/sumform', function(req, res) {
  res.sendfile("090430.html")
});


app.get('/getItem', function(req, res) {
  var userPrice = Number(req.query.inputPrice);
  //요청을 받는거야 파라미터 담아와서 userPrice에 담아준거야
  var priceTable = [{
      name: "item1",
      price: 1000
    }, {
      name: "item2",
      price: 5000
    }, { //가격정보야
      nmae: "item3",
      price: 10000
    }, {
      name: "item4",
      price: 30000
    }, {
      name: "item5,price:50000"
    },
    {
      name: "item6",
      price: 100000
    }, {
      name: "item7",
      price: 500000
    }
  ];

  var resText = "구매불가";
  for (var i = 0; i < priceTable.length; i++) {
    if (priceTable[i].price <= userPrice) {
      resText = priceTable[i].name;
    }
  }
  res.send(resText);
});

app.get('/itemForm', function(req, res) {
      res.sendfile("item.html")
    });
