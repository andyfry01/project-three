import React from 'react';
import SongComponent from './SongComponent';
import ajaxHelpers from '../utils/ajaxHelpers';

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
    console.log('passing props to plalyist comp', this.props.playlist);

    return (
      <div>
        <h3>song info displayed below</h3>
        <SongComponent />
      </div>
    );
  }
});


export default PlaylistComponent;
