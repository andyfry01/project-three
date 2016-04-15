import React from 'react';
import {Link} from 'react-router';
import SongComponent from './SongComponent'
import ajaxHelpers from '../utils/ajaxHelpers'

let styles = require('../css/styles.css');


const TopHitsComponent = React.createClass({

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
            country={obj['@attr'].country}
            album_image={obj.image[3]['#text']}
            song_url={obj.url}

            songs={obj.lastFM}
          />
        </div>
      )
    });

    return (
      <div>
        {song}
      </div>
    )
  }
});

export default TopHitsComponent;
