import React from 'react';
let styles = require('../css/landingStyles.css');
import ajaxHelpers from '../utils/ajaxHelpers'

const SongComponent = React.createClass({

  addSong: function(){
    let song = {
      name: this.props.name,
      artist: this.props.artist,
      country: this.props.country,
      rank: this.props.rank,
      album_image: this.props.album_image,
      song_url: this.props.song_url
    }
    ajaxHelpers.addSongToPlaylist(song)
  },

  render: function() {

    return (
      <div className="songDiv">

        <div className="songInfo">
          <p> Track: {this.props.name}</p>
          <p> Artist: {this.props.artist}</p>
          <p> Rank: {this.props.rank}</p>
        </div>

        <button onClick={this.addSong} className="addSongBtn">Add to Playlist</button>

        <br/>
        <br/>
      </div>
    );
  }
});

export default SongComponent;
