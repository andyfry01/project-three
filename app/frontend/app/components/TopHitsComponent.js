import React from 'react';
import {Link} from 'react-router';
import SongComponent from './SongComponent'
import ajaxHelpers from '../utils/ajaxHelpers'

let styles = require('../css/styles.css');


const TopHitsComponent = React.createClass({

  getInitialState: function(){
    return {
      name: 'All My Life',
      artist: 'Foo Fighters',
      country: 'America',
      rank: 10.0,
      album_image: 'album.jpg',
      song_url: 'song.com',
      lastFM: '',
    }
  },

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
    ajaxHelpers.addSongToPlaylist();
  },

  render: function(){
    console.log(this.props.songs);

    let songCompStyle = {
      margin: '30px',
      padding: '30px',
      borderRadius: '10px',
      backgroundColor: '#fff',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    let song = this.props.songs.track.map(function(obj){
      return (
        <div style={songCompStyle} className='songComp'>
          <SongComponent
            name={obj.name}
            artist={obj.artist.name}
            rank={obj['@attr'].rank}

            songs={obj.lastFM}
          />
        </div>
      )

    });
    return (
      <div>
        <button onClick={this.addSong}>Test button</button>
        {song}
      </div>
    )
  }
});

export default TopHitsComponent;
