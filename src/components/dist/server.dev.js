"use strict";

var express = require('express');

var app = express();
var PORT = process.env.PORT || 5000;
app.get('/', function (req, res) {
  res.send('hello!!');
});
app.listen(PORT, function () {
  console.log('Server running on port $(PORT');
});