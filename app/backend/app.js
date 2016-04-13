var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var MongoClient = mongodb.MongoClient;

//Mongo URL, collections
var mongoUrl = 'mongodb://localhost:27017/projectThree';

//default get route
app.get('/', function(request, response) {
  response.json({"message": "welcome to the database!"})
});

// route for finding a user in the database when login is clicked.
// the object that gets sent to this path should look as follows:
//    {
//      'username': <username>
//      'password': <password>
//    }
app.get('/users/:user', function(request, response){
  MongoClient.connect(mongoUrl, function(error, db){
    var usersCollection = db.collection('users');
    if (error) {
      console.log('error connecting to db:', error);
    } else {
      console.log('searching database for user information');
      // I'm going to have to experiment with this next line to actually find the user based on the username/pass fields
      usersCollection.find(request.params).toArray(function (error, result) {
        if (error) {
          console.log("error", error);
          response.json("error")
        } else if (result.length) {
          console.log('user found:', result);
          response.json(result)
        } else {
          console.log('no users found in database with that username/password');
          response.json('no users found in database with that username/password')
        }
        db.close(function(){
          console.log("database closed");
        }) //end db.close()
      }) //end usersCollection.find()
    } //end else
  }) //end MongoClient connect
}) // end get user


// route for adding a new user to the database
app.post('/users/new', function(request,response){
  console.log('adding new user to the users database:', request.body);
  MongoClient.connect(mongoUrl, function(error, db){
    var usersCollection = db.collection('users');
    if (error) {
      console.log("error connecting to database:", error);
    } else {
      console.log('Adding new user to database');

      //some tweaking probably required to build this object correctly
      var newUser = {
        'username': request.body.username,
        'password': request.body.password,
        'playlist': [],
        'loggedIn': false,
      }

      usersCollection.insert([newUser], function(error, result){
        if (error) {
          console.log('error adding new user:', error);
        } else {
          console.log('new user added', result);
          response.json(result)
        }
        db.close(function(){
          console.log('database closed');
        }) //end db.close()
      }) //end usersCollection.insert()
    } //end else
  }) //end MongoClient connect
}) // end post new user


//route for posting new song to songs collection
app.post('/songs/new', function(request, response){
  console.log('adding new song to the songs database:', request.body);
  MongoClient.connect(mongoUrl, function(error, db){
    var songsCollection = db.collection('songs');
    if (error) {
      console.log("error connecting to database:", error);
    } else {
      console.log('Adding new song to database');

      //some tweaking probably required to build this object correctly
      var newSong = {
        "name": request.body.name,
        "artist": request.body.artist,
        "country": request.body.country,
        "rank": request.body.rank,
        "albumImage": request.body.albumImage,
        "songURL": request.body.songURL
      }

      songsCollection.insert([newSong], function(error, result){
        if (error) {
          console.log('error adding new song:', error);
        } else {
          console.log('new song added', result);
          response.json(result)
        }
        db.close(function(){
          console.log('database closed');
        }) //end db.close()
      }) //end songsCollection.insert()
    } //end else
  }) //end MongoClient connect
}) // end post new song


//route for getting _id from song for adding into user playlist array
app.get('...', function(request, response){

})


//route for posting the _id of a song into the playlist collection of a user
app.post('...', function(request, response){

})


app.listen(3000, function() {
  console.log("listening on port 3000");
})
