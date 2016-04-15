import React from 'react';
import SongComponent from './SongComponent';
import ajaxHelpers from '../utils/ajaxHelpers';

const PlaylistComponent = React.createClass({

  componentDidMount: function(){
    console.log('playlist component mounted');
    console.log('props', this.props);

    ajaxHelpers.findCurrentPlaylist()
    .then(function(response){
      console.log(response.data)
    })

  },

  render: function(){

    return (
      <div>
        <h3>song info displayed below</h3>
        <SongComponent />
      </div>
    );
  }
});


export default PlaylistComponent;
