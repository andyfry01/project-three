import React from 'react';
import SongComponent from './SongComponent';

const PlaylistComponent = React.createClass({

  render: function(){
    console.log('passing props to playlist comp', this.props.playlist.data);

    let playlist = this.props.playlist.data.map(function(obj){
      return (
        <div key={obj._id}>
          <SongComponent
            name={obj.name}
            artist={obj.artist}
            rank={obj.rank}
            album_image={obj.albumImage}
            song_url={obj.songURL}
          />
        </div>
      );
    });

    return (
      <div className='flexResults'>
        {playlist}
      </div>
    );
  }
});

export default PlaylistComponent;
