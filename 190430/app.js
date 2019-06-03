var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);


app.get('/yoorim', function(req, res) {
  res.sendfile("중간고사 수정.html");
});

console.log("running33333");
//여기부터 0430

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
  // console.log(req.query.a);
  var userPrice = Number(req.query.price);
  var resText = "구매불가"; //초기값 설정.
  // console.log(resText)
  var priceTable = [{
      name: "item1",
      price: 1000
    },
    {
      name: "item2",
      price: 5000
    },
    {
      name: "item3",
      price: 10000
    },
    {
      name: "item4",
      price: 30000
    },
    {
      name: "item5",
      price: 50000
    },
    {
      name: "item6",
      price: 100000
    },
    {
      name: "item7",
      price: 500000
    },
  ];
  // console.log(priceTable);
  // res.send("test"); //테스트용 요청에 값을 담아보낼 수 있다 querystring req.qurry 서버쪽은 그거를 뽑아오는것.
  //  });

  for (var i = 0; i < priceTable.length; i++) {
    if (priceTable[i].price <= userPrice) { //.으로 속성값에 접근
      // console.log(priceTable[i].price);
      resText = priceTable[i].name; //맞는 가격에 따라 resText의 값ㅇ르 바꿔주는 것.
    }
  }
  // console.log(resText);
  res.send(resText);
});

app.get('/itemForm', function(req, res) {
  res.sendfile("item.html")
});


//여기부터 0507
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
