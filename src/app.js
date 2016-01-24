var express = require('express');
var app = express();
var pigLatin = require('./pig-latin.js');
var port = process.env.PORT || 5000;

app.get('/', function (req, res) {
  var message = pigLatin("california");
  res.send(message);
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
