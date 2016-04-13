import axios from 'axios';

const helpers = {
  //finding user
  findUser: function(){
    return axios.get('http://localhost:3000/users', user.name);
  },

  //adding user
  addUser: function(user){
    return axios.post('http://localhost:3000/users/new', user)
  },

  //posting a new song
  postSong: function(song){
    return axios.post('http://localhost:3000/songs/new', song)
  }
}

export default helpers;
