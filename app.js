var express = require('express');
var app = express();
var http = require('http');
var proxy = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
});

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

app.listen(5000);
