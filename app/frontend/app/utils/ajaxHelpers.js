import axios from 'axios';

const helpers = {

  //finding user by name
  findUser: function(user){
    return axios.post('https://blooming-mesa-61602.herokuapp.com/users/find', user);
  },

  //adding user
  addUser: function(user){
    return axios.post('https://blooming-mesa-61602.herokuapp.com/users/new', user);
  },

  //find loggedIn user
  findLoggedInUser: function(){
    return axios.get('https://blooming-mesa-61602.herokuapp.com/loggedin');
  },

  //find current user's playlist
  findCurrentPlaylist: function(){
    return axios.get('https://blooming-mesa-61602.herokuapp.com/playlist');
  },

  //add song to user playlist
  addSongToPlaylist: function(song){
      return axios.post('https://blooming-mesa-61602.herokuapp.com/songs/new', song);
  },

  //delete song from user playlist
  deleteSong: function(mongoID) {
    console.log("mongo ID:", mongoID);
    console.log("delete song triggered the ajax helper");
    return axios.delete('https://blooming-mesa-61602.herokuapp.com/songs/' + mongoID)
  },

  //request to lastFM
  findCountrySongs: function(countryName){
    return axios.get('http://ws.audioscrobbler.com/2.0/?format=json&method=geo.gettoptracks&country=' + countryName + '&api_key=' + process.env.LASTFM_API_KEY);
  },

  //play song from spotify
  playSong: function(song){
      return axios.get('https://api.spotify.com/v1/search?query=' + song + '&offset=0&limit=1&type=track');
  },

}
export default helpers;
