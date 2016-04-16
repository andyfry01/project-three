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

  getSongs: function(){

    let songCompStyle = {
      formatDiv: {
        backgroundColor: 'rgba(255,255,255,.1)',
        color: 'rgba(255,255,255,.8)',
        textShadow: '2px 2px #000',
        borderRadius: '5px',
        margin: '20px',
        padding: '30px',
        width: '370px',
        height: '370px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundImage: 'url(' + this.props.album_image + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
      formatBtn: {
        backgroundColor: 'rgba(142, 38, 113,.9)',
        border: '1px solid rgba(142, 38, 113,1)',
        color: 'rgba(255, 255, 255, 1)',
      },
    };

    return (
      <div style={songCompStyle.formatDiv} className='songInfo'>

        <div>
          <p> Track: {this.props.name}</p>
          <p> Artist: {this.props.artist}</p>
          <p> Rank: {this.props.rank}</p>
        </div>

        <div>
          <button style={songCompStyle.formatBtn} onClick={this.addSong} className="addSongBtn">Add to Playlist</button>
        </div>

      </div>
    )
  },

  render: function() {
    return (
      <div>
        {this.getSongs()}
      </div>
    );
  }
});

export default SongComponent;
