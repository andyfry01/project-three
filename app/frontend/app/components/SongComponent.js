import React from 'react';

const SongComponent = React.createClass({

  render: function() {

    return (
      <div className="songDiv">

        <div className="songInfo">
          <p> Song: {this.props.name}</p>
          <p> Artist: {this.props.artist}</p>
          <p> Rank: {this.props.rank}</p>
        </div>
        <button>Add Song to Playlist</button>
        <br/>
        <br/>
      </div>
    );
  }
});

export default SongComponent;
