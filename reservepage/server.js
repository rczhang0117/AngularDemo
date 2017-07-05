var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');



app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

var database = require('./config/database');

mongoose.connect(database.url);

require('./app/routes')(app);


app.listen('3000', function(){
    console.log("app is working");
})




