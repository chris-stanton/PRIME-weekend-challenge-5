//must have variables
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = require('./routes/route.js');
var path = require('path');
var port = 5000;

///serve static files//
app.use(express.static('./server/public'));
//must have for angular
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//points to index file
app.get('/', function(req, res){
  res.sendFile(path.resolve('./server/public/views/index.html'));
});//end of app.get

//re-direct
app.use('/', router);

//listening port
app.listen(port), function(){
    console.log('Listening on localhost: ', port);
};//end of app.listen
