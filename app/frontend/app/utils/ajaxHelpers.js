import axios from 'axios';
import API_KEY from './API_KEY';

const helpers = {
  //finding user
  findUser: function(user){
    return axios.get('http://localhost:3000/users', user.name);
  },

  //adding user
  addUser: function(user){
    return axios.post('http://localhost:3000/users/new', user);
  },

  //posting a new song
  postSong: function(song){
    return axios.post('http://localhost:3000/songs/new', song);
  },

  //request to lastFM
  findCountrySongs: function(countryName){
    return axios.get('http://ws.audioscrobbler.com/2.0/?format=json&method=geo.gettoptracks&country=' + countryName + '&api_key=' + API_KEY);
  },

  //add song to user playlist
  addSongToPlaylist: function(){
    //loggedInUser = _id of logged in user
    let songInfo = {
      loggedInUser: undefined,
      lastSong: undefined
    }
    // nasty code, delayAddSong and addSong should be refactored into a callback
    // function....when I learn how to do those.
    function delayAddSong() {
      let timeoutID = window.setTimeout(addSong, 500);
    }
    function addSong() {
      axios.post('http://localhost:3000/addSong/', songInfo);
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
    //finds logged in user, adds song to playlist array
    delayAddSong();


  }

}

export default helpers;
