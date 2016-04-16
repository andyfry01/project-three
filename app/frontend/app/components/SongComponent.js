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
      margin: '20px',
      padding: '30px',
      borderRadius: '10px',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      width: '370px',
      height: '370px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch',
    };

    return (
      <div style={songCompStyle}>

        <div className="songInfo">
          <p> Track: {this.props.name}</p>
          <p> Artist: {this.props.artist}</p>
          <p> Rank: {this.props.rank}</p>

        </div>
        <button onClick={this.addSong} className="addSongBtn">Add to Playlist</button>

      </div>
    );
  }
});

export default SongComponent;
