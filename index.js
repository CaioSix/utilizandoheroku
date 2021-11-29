const express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Olá Mundo!');
});

app.listen(3000, function() {
  console.log('App rodando na porta 3000!');
});