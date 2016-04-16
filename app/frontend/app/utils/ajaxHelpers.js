import axios from 'axios';
import API_KEY from './API_KEY';

const helpers = {

  //get all users
  getAllUsers: function(){
    return axios.get('http://localhost:3000/users');
  },

  //finding user by name
  findUser: function(user){
    return axios.post('http://localhost:3000/users/find', user);
  },

  //adding user
  addUser: function(user){
    return axios.post('http://localhost:3000/users/new', user);
  },

  //request to lastFM
  findCountrySongs: function(countryName){
    return axios.get('http://ws.audioscrobbler.com/2.0/?format=json&method=geo.gettoptracks&country=' + countryName + '&api_key=' + API_KEY);
  },

  //find loggedIn user
  findLoggedInUser: function(){
    return axios.get('http://localhost:3000/loggedin');
  },

  //find current user's playlist
  findCurrentPlaylist: function(){
    return axios.get('http://localhost:3000/playlist');
  },

  //add song to user playlist
  addSongToPlaylist: function(song){
    //loggedInUser = _id of logged in user
    let songInfo = {
      loggedInUser: undefined,
      lastSong: undefined
    }
    // nasty code, delayAddSong and addSong should be refactored into a callback function
    function delayAddSong() {
      let timeoutID = window.setTimeout(addSong, 750);
    }
    function addSong() {
      axios.post('http://localhost:3000/addSong/', songInfo);
    }

    function delayPostSong(){
      let timeoutID = window.setTimeout(postSong(song), 500)
    }
    function postSong(song){
      return axios.post('http://localhost:3000/songs/new', song);
    }

    //finds logged in user
    axios.get('http://localhost:3000/loggedin')
    .then(function(response){
      songInfo.loggedInUser = response
    })
    //find last song added to songs collection
    axios.get('http://localhost:3000/lastsong')
    .then(function(response){
      songInfo.lastSong = response
    })
    //adds song to songs collection
    delayPostSong();
    //finds logged in user, adds song to playlist array
    delayAddSong();
  }

}
export default helpers;
