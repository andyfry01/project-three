import React from 'react';
import SongComponent from './SongComponent';

const PlaylistComponent = React.createClass({
  render: function() {
    return (
      <div>
        <h3>song info displayed below</h3>
        <SongComponent />
      </div>
    );
  }
});


export default PlaylistComponent;
