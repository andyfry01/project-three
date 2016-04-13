import React from 'react';

const SongComponent = React.createClass({

  render: function() {
    return (
      <div className="songDiv">
        <button
          onClick={this.props.handleAddSong}
          >This is a test button for adding songs to the DB</button>
      </div>
    );
  }
});

export default SongComponent;
