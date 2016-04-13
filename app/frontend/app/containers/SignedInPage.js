import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import MapComponent from '../components/MapComponent';
import TopHitsComponent from '../components/TopHitsComponent';

const SignedInPage = React.createClass({
  render: function() {
    return (
      <div>
        <HeaderComponent />
        <MapComponent />
        <TopHitsComponent />
      </div>
    );
  }
});

export default SignedInPage;
