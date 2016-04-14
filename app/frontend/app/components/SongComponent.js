import React from 'react';

const SongComponent = React.createClass({

  render: function() {

    return (
      <div className="songDiv">

        <div className="songInfo">
          <h3>Songs</h3>
            <ul>
              {
                this.props.songs.map( (song, index) => {
                  return
                    <li key={index}>
                      {song},
                    </li>;
                })
              }
            </ul>

        </div>
        <br/>
        <br/>
        <button
          onClick={this.props.handleAddSong}
        > This is a test button for adding songs to the DB</button>

      </div>
    );
  }
});

export default SongComponent;
