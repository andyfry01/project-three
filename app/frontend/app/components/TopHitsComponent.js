import React from 'react';
import {Link} from 'react-router';

const TopHitsComponent = React.createClass({
  render: function() {
    return (
      <div>
      <h1> Top Hits from 'Country Name' need to make  </h1>
      <Link to='LandingPage'>
        <p>can u click on this?</p>
      </Link>
      </div>
    );
  }
});

export default TopHitsComponent;
