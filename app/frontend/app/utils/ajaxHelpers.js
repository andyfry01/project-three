import axios from 'axios';

const helpers = {
  //finding user
  findUser: function(){
    return axios.get('http://localhost:3000/projectThree/users', user.name);
  },

  //adding user
  addUser: function(user){
    return axios.post('http://localhost:3000/projectThree/new', user)
  },

  //posting a new song
  postSong: function(song){
    return axios.post('http://localhost:3000/projectThree/songs/new', song)
  }
}

export default helpers;
