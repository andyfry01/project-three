import React from 'react';
import SongComponent from './SongComponent';

const PlaylistComponent = React.createClass({
  render: function() {
    return (
      <div>
        <h1>hi this is where song_info gets displayed</h1>
        <SongComponent />
      </div>
    );
  }
});


export default PlaylistComponent;
