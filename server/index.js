const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const bodyParser = require('body-parser');

//app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/www')));

require('./routes.js')(app, path);
require('./sockets.js')(app, io);
require('./listen.js')(http);

/*var server = http.listen(4200, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server ON');
  console.log("Server Listening on: " + host + " port: " + port);
});



var express = require('express')
var app = express();
var http = require('http');
var server = http.Server(app);
var socketIO = require('socket.io');
var io = socketIO(server);
//const io = require('socket.io-client');
const port = process.env.PORT || 4200;

server.listen(port, () => {
console.log(`started on port: ${port}`);
});*/
