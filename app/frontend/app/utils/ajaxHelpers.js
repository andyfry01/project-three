import axios from 'axios';
import API_KEY from './API_KEY';

const helpers = {

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
      return axios.post('http://localhost:3000/songs/new', song);
  },

  //play song from spotify
  playSong: function(song){
      return axios.get('https://api.spotify.com/v1/search?q=' + song + '&type=track');
  },

}
export default helpers;
