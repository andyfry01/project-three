import React from 'react';
import {Link} from 'react-router';
import SongComponent from './SongComponent'

const TopHitsComponent = React.createClass({
  doSomething: function(){
    console.log("hi andy");
  },
  render: function() {
    return (
      <SongComponent consoleLog={this.doSomething}/>
    );
  }
});

export default TopHitsComponent;
