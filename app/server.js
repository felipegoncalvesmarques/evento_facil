/**
* @Author: Felipe Gonçalves Marques
* @Date:   2016-09-18 00:09:82
* @Email:  marques.goncalves.felipe@gmail.com
* @Last modified by:   Felipe Gonçalves Marques
* @Last modified time: 2016-09-19 23:09:75
*/

var bodyParser = require('body-parser');
var express = require('express');
var leadHandler = require("./lead/lead.handler.js")
var app = express();
app.enable('trust proxy');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/angularApp'));
app.post('/saveLead', leadHandler.post);
app.get('/registrar', function(req,res) {
  res.sendFile('angularApp/index.html', {"root": __dirname})
});

app.listen(80, function() {
  console.log('App listening on port 3000!');
});
