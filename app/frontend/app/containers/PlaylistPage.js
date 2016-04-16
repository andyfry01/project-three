import React from 'react';
import PlaylistComponent from '../components/PlaylistComponent'
import HeaderComponent from '../components/HeaderComponent';
import ajaxHelpers from '../utils/ajaxHelpers';
import {Link} from 'react-router';

const PlaylistPage = React.createClass({

  componentDidMount: function() {
    console.log("hi playlistPage has loaded");

    ajaxHelpers.findCurrentPlaylist()
    .then(function(response){
      this.setState({
        ajaxReturn: response
      });
    }.bind(this));
  },

  getInitialState: function(){
    return {
      ajaxReturn: [],
    }
  },

  getPlaylist: function(){
    if (this.state.ajaxReturn){
      return (
        <div>
          <PlaylistComponent
            playlist={this.state.ajaxReturn}
          />
        </div>
      );
    }
  },

  render: function() {

      let divStyle = {
        margin: '30px',
      }

    return (
      <div>
        <HeaderComponent buttonText={"Back to Map"} link={"signedInPage"} />

        <div style={divStyle}>
          <h1> hi im playlist page</h1>
            <div>
              {this.getPlaylist()}
            </div>
        </div>
      </div>
    );
  }
});

export default PlaylistPage;
