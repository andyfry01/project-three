import React from 'react';
import {Link} from 'react-router';

const TopHitsComponent = React.createClass({
  render: function() {
    return (
      <div>
      <h1> hi is it working </h1>
      <Link to='LandingPage'>
        <h1>can u click on this?</h1>
      </Link>
      </div>
    );
  }
});

export default TopHitsComponent;
