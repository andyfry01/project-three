import React from 'react';
import TitleComponent from './TitleComponent';
import ButtonComponent from '../components/ButtonComponent';
import {Link} from 'react-router';

const HeaderComponent = React.createClass({
  render: function() {

    let headerStyle = {
      backgroundColor: 'black',
      color: 'white',
      lineHeight: '50px',
      margin: '0'
    };

    let pStyle = {
      margin: '20px',
    }

    return (
      <div className="main-container">
        <div style={headerStyle}>
          <p>
            App Name
          </p>

          <ButtonComponent buttonText={this.props.buttonText} link={this.props.link}/>
        </div>
      </div>
    );
  }
});

export default HeaderComponent;
