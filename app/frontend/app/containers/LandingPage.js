import React from 'react';
import {Link} from 'react-router';
import TitleComponent from '../components/TitleComponent';
import LoginComponent from '../components/LoginComponent';
import ajaxHelpers from '../utils/ajaxHelpers';

const LandingPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      user: '',
      password: '',
      playlist: [],
      loggedIn: false
    }
  },

  handleOnChangeUser: function(e) {
    this.setState({
      user: e.target.value
    })
    console.log("target.value for user is:", this.state.user);
  },

  handleOnChangePassword: function(e) {
    this.setState({
      password: e.target.value
    })
    console.log("target.value for password is:", e.target.value);
  },

  handleSubmitUser: function(e) {
    // e.preventDefault();
    this.setState({
      user: this.state.user,
      password: this.state.password
    });
    console.log("this.state.user is:", this.state.user);
    let user = {
      user: this.state.user,
      password: this.state.password,
      playlist: [],
      loggedIn: true
    };
    console.log('the user looks like this', user);
     ajaxHelpers.addUser(user)
     .then(function(response) {
       console.log("u added something!!!! here u go:", response);
     }.bind(this))
  },

  render: function() {
    return (
      <div>
        <Link to='PlaylistPage'>
          <h1>hi click to see playlist stuff</h1>
        </Link>
        <TitleComponent />
        <LoginComponent
          onChangeUser={this.handleOnChangeUser}
          onChangePassword={this.handleOnChangePassword}
          onSubmit={this.handleSubmitUser}
          />
      </div>
    )
  }
})

export default LandingPage;
