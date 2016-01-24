var express = require('express');
var app = express();
var pigLatin = require('./pig-latin.js');

app.get('/', function (req, res) {
  var message = pigLatin("california");
  res.send(message);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
