import React from 'react';

const SongComponent = React.createClass({

  render: function() {

    return (
      <div className="songDiv">

        <div className="songInfo">
          <h3>Songs</h3>
          <p> Song: {this.props.name}</p>
          <p> Artist: {this.props.artist}</p>
          <p> Rank: {this.props.rank}</p>
        </div>
        <br/>
        <br/>
        <button>test button</button>

      </div>
    );
  }
});

export default SongComponent;
