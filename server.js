var express = require('express');
var bodyParser = require('body-parser'); //中间键读取post数据解析
var compress = require('compression');

var PORT = 9000;

//express
var app = express();

app.use(compress()); //gzip + nginx gzip
//添加 body-parser 中间件，就可以req接收客户端返回的数据
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb'}));
//parse application/json
app.use(bodyParser.json());

//设置路由
app.use('/assets', express.static('assets')); //静态资源
app.get('/', function(req, res) {
    res.sendfile("./index.html");
    // res.json('hello three.js')
});

app.listen(PORT, function() {
    console.log('服务器启动，监听 port: ' + PORT + 'running~');
});


