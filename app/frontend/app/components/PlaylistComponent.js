import React from 'react';
import SongComponent from './SongComponent';

const PlaylistComponent = React.createClass({

  // componentDidMount: function(){
  //
  //   ajaxHelpers.findCurrentPlaylist()
  //   .then(function(response){
  //     console.log('songs in playlist:', response.data)
  //     let song = response.data.map(function(obj){
  //
  //     })
  //   })
  // },

  render: function(){
    console.log('passing props to playlist comp', this.props.playlist.data);

    let playlist = this.props.playlist.data.map(function(obj){
      return (
        <div>
          <SongComponent
            name={obj.name}
            artist={obj.artist}
            rank={obj.rank}
            album_image={obj.albumImage}
            song_url={obj.songURL}
          />
        </div>
      )
    });

    return (
      <div>
        <h3>song info displayed below</h3>
        {playlist}
      </div>
    );
  }
});


export default PlaylistComponent;
