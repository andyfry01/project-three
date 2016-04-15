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

}

export default helpers;
