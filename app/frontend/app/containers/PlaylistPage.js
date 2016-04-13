import React from 'react';
import PlaylistComponent from '../components/PlaylistComponent'

const PlaylistPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1> hi im playlist page</h1>
        <PlaylistComponent />
      </div>
    )
  }
})

export default PlaylistPage;
