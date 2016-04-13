import React from 'react';
import {Link} from 'react-router';
import SongComponent from './SongComponent'
import ajaxHelpers from '../utils/ajaxHelpers'

const TopHitsComponent = React.createClass({
  addSong: function(){
    console.log("hi andy, adding song");
    let song = {
      name: this.state.name,
      artist: this.state.artist,
      country: this.state.country,
      rank: this.state.rank,
      album_image: this.state.album_image,
      song_url: this.state.song_url
    }
    console.log("this is what the song looks like", song);
    ajaxHelpers.postSong(song);
  },
  getInitialState: function(){
    return {
      name: 'All My Life',
      artist: 'Foo Fighters',
      country: 'America',
      rank: 10.0,
      album_image: 'album.jpg',
      song_url: 'song.com'
    }
  },
  render: function() {
    return (
      <SongComponent handleAddSong={this.addSong}/>
    );
  }
});

export default TopHitsComponent;
