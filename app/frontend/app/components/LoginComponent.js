import React from 'react';
import {Link} from 'react-router';


const LoginComponent = React.createClass({
  render: function() {
    console.log("props for login are:", this.props);
    return (
      <div>
        <h3> Log in or create an account!</h3>

        <input
        type="text"
        placeholder="Username"
        onKeyUp={this.props.onChangeUser}
        value={this.props.handleOnChangeUser} />
        <br /> <br />

        <input
        type="text"
        placeholder="Super Secure Password"
        onChange={this.props.onChangePassword}
        value={this.props.handleOnChangePassword} />
      
        <Link to="SignedInPage">
          <button type="button">Sign In</button>
        </Link>
        <br />
        <Link to="SignedInPage">
          <button type="button" onClick={this.props.onSubmit}>One Click Sign Up!</button>
        </Link>
      </div>
    )
  }
})

export default LoginComponent;
