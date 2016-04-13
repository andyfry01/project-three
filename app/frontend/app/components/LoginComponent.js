import React from 'react';
import {Link} from 'react-router';

const LoginComponent = React.createClass({
  render: function() {
    return (
      <div>
        <h3> Log in or create an account!</h3>
        <input
        type="text"
        placeholder="Username" />
        <br /> <br />
        <input
        type="text"
        placeholder="Super Secure Password" />
        <Link to="SignedInPage">
          <button type="button">Sign In</button>
        </Link>
      </div>
    )
  }
})

export default LoginComponent;
