import React from 'react';
import {Link} from 'react-router';
import TitleComponent from '../components/TitleComponent';
import LoginComponent from '../components/LoginComponent';

const LandingPage = React.createClass({
  render: function() {
    return (
      <div>
        <Link to='PlaylistPage'>
          <h1>hi click to see playlist stuff</h1>
        </Link>
        <TitleComponent />
        <LoginComponent />
      </div>
    )
  }
})

export default LandingPage;
