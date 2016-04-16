var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var MongoClient = mongodb.MongoClient;
var ObjectId = require('mongodb').ObjectID


//Mongo URL, collections
var mongoUrl = 'mongodb://localhost:27017/projectThree';

//default get route
app.get('/', function(request, response){
  response.json({"message": "welcome to the database!"})
});

// route for finding current user's playlist
app.get('/playlist', function(request, response){
  MongoClient.connect(mongoUrl, function(error, db){
    var usersCollection = db.collection('users');
    if (error){
      console.log('error connecting to db:', error);
    } else {
      console.log('searching database for current playlist');

      usersCollection.find({loggedIn:true}).toArray(function (error, result){
        if (error){
          console.log('error finding playlist', error);
        } else if (result.length){
          console.log('current playlist:', result[0].playlist);

          var songsArr = result[0].playlist;
          var songsCollection = db.collection('songs');
          var obj_ids = songsArr.map(function (item){ return ObjectId(item)}); //help from http://stackoverflow.com/questions/29560961/query-mongodb-for-multiple-objectids-in-array
          console.log("the object IDs we pass into the song collection find look like this", obj_ids);
          songsCollection.find({'_id': {'$in': obj_ids}})
          .toArray(function(error, result){
            if (error){
              console.log('error using $in', error);
            } else {
              console.log('result', result);
              response.json(result);
            }
          })
        } else {
          console.log('no playlist available');
        }
      }) // end usersCollection.find()
    } // end else
  }) // end MongoClient connect()
}) // end get()


// route for finding a user in the database when login is clicked.
// the object that gets sent to this path should look as follows:
//    {
//      'username': <username>
//      'password': <password>
//    }
app.post('/users/find', function(request, response){
  console.log('hey, it looks like youre trying to find a user');
  console.log('this is the request.body', request.body);
  MongoClient.connect(mongoUrl, function(error, db){
    var usersCollection = db.collection('users');
    if (error) {
      console.log('error connecting to db:', error);
    } else {
      console.log('searching database for user information');
      // I'm going to have to experiment with this next line to actually find the user based on the username/pass fields
      usersCollection.find({$and:[{user: request.body.user}, {password: request.body.password}]}).toArray(function (error, result) {
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
        'user': request.body.user,
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


//route for adding a song to a user's playlist
app.post('/songs/new', function(request, response){
  console.log('adding new song to the songs database:', request.body);
  MongoClient.connect(mongoUrl, function(error, db){
    var usersCollection = db.collection('users')
    var songsCollection = db.collection('songs');
    if (error) {
      console.log("error connecting to database:", error);
    } else {
      console.log('Adding new song to database');
      var newSong = {
        "name": request.body.name,
        "artist": request.body.artist,
        "country": request.body.country,
        "rank": request.body.rank,
        "albumImage": request.body.album_image,
        "songURL": request.body.song_url
      }

      songsCollection.insert([newSong], function(error, result){
        if (error) {
          console.log('error adding new song:', error);
        } else {

          console.log('new song added', result);
          response.json(result)

          usersCollection.find({loggedIn:true}).toArray(function (error, result){
            if (error) {
              console.log('error finding logged in user', error);
            } else if (result.length) {
              console.log("logged in user found:", result);
              console.log("logged in user ID", result[0]['_id']);
              var userID = ObjectId(result[0]['_id'])
              songsCollection.find().limit(1).sort({$natural:-1}).toArray(function (error, result){
                if (error) {
                  console.log("error finding song");
                } else if (result.length) {
                    console.log("last song added to songs collection found", result[0]['_id']);
                    var songID = ObjectId(result[0]['_id'])
                    usersCollection.update({'_id': userID}, {$push: {'playlist': songID}})
                }
              })
            }
          })
        }
        db.close(function(){
          console.log('database closed');
        }) //end db.close()
      }) //end songsCollection.insert()
    } //end else
  }) //end MongoClient connect
}) // end post new song



app.listen(3000, function() {
  console.log("listening on port 3000");
})
