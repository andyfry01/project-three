import React from 'react';

const SongComponent = React.createClass({

  render: function() {
    return (
      <div className="songDiv">
        <button
          onClick={this.props.addSong}
          >Hello I'm a button</button>
      </div>
    );
  }
});

export default SongComponent;
