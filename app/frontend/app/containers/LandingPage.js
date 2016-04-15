import React from 'react';
import {Link} from 'react-router';
import TitleComponent from '../components/TitleComponent';
import LoginComponent from '../components/LoginComponent';
import ajaxHelpers from '../utils/ajaxHelpers';

let styles = require('../css/landingStyles.css');

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

    let divStyle = {
      border: '1px solid #ddd',
      width: '40%',
      height: '100%',
      margin: 'auto',
      borderRadius: '5px',
      backgroundColor: 'rgba(255,255,255,.5)',
      padding: '20px',
      textAlign: 'center',
      position: 'relative',
      top: '30px',
    };

    let titleStyle = {
      textAlign: 'center',
    }

    return (
      <div style={divStyle}>
        <TitleComponent className='titleComp' />
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
