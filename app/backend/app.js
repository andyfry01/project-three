var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();

//ability to access ajax ANYWHERE
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//connecting to mongo database
var MongoClient = mongodb.MongoClient;
//mongodb base url
var mongoUrl = 'mongodb://localhost:27017/projectThree';

app.get('/', function(request, response) {
  response.json({"description": "hi this link is working!!!"})
});

app.get('/users')

app.listen(3000, function() {
  console.log("hi man im listening to u at port 3k");
})
