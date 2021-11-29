const express = require('express');
require("dotenv").config();

const APP_PORT = process.env.PORT||3000;


var app = express();


app.get('/', function(req, res) {
  res.send('Olá Mundo!');
});

app.listen(APP_PORT, function() {
  console.log('App rodando na porta 3000!');
});