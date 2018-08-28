var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/www'));

var server = http.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server ON');
  console.log("Server Listening on: " + host + " port: " + port);
});
