import React from 'react';
import TitleComponent from '../components/TitleComponent';
import LoginComponent from '../components/LoginComponent';

const LandingPage = React.createClass({
  render: function() {
    return (
      <div>
        <TitleComponent />
        <LoginComponent />
      </div>
    )
  }
})

export default LandingPage;
