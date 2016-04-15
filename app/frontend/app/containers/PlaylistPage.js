import React from 'react';
import PlaylistComponent from '../components/PlaylistComponent'
import HeaderComponent from '../components/HeaderComponent';
import {Link} from 'react-router';

let styles = require('../css/styles.css');

const PlaylistPage = React.createClass({

  componentDidMount: function() {
    console.log("hi playlistPage has loaded");
  },

  render: function() {
    return (
      <div>
        <HeaderComponent buttonText={"Back to Map"} link={"signedInPage"} />
        <h1> hi im playlist page</h1>
        <PlaylistComponent />
      </div>
    )
  }
})

export default PlaylistPage;
