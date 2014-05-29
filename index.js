var app = require('koa')();

var router = require('koa-router');
var serve = require('koa-static');

app.use(serve('./public'));

var server = require('http').Server(app.callback());
var io = require('socket.io')(server);

io.on('connection', function(conn) { 
  conn.on('action', function(action) {
    console.log(action);
  });
});

server.listen(3000);
