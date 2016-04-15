import React from 'react';
let styles = require('../css/landingStyles.css');


const SongComponent = React.createClass({

  render: function() {

    return (
      <div className="songDiv">

        <div className="songInfo">
          <p> Track: {this.props.name}</p>
          <p> Artist: {this.props.artist}</p>
          <p> Rank: {this.props.rank}</p>
        </div>
        <button className="addSongBtn">Save</button>
        <br/>
        <br/>
      </div>
    );
  }
});

export default SongComponent;
