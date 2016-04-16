import React from 'react';
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
    let songCompStyle = {
      margin: '10px',
      padding: '30px',
      borderRadius: '10px',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      width: '350px',
      height: '350px',
    };

    return (
      <div style={songCompStyle} className="songDiv">

        <div className="songInfo">
          <p> Track: {this.props.name}</p>
          <p> Artist: {this.props.artist}</p>
          <p> Rank: {this.props.rank}</p>

          <button onClick={this.addSong} className="addSongBtn">Add to Playlist</button>
        </div>

      </div>
    );
  }
});

export default SongComponent;
