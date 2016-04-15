import React from 'react';
import TitleComponent from './TitleComponent';
import ButtonComponent from '../components/ButtonComponent';
import {Link} from 'react-router';

const HeaderComponent = React.createClass({

  render: function() {

    let headerStyle = {
      backgroundColor: 'black',
      color: '#fff',
      lineHeight: '50px',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '30px',
    };

    return (
      <div className="main-container">
        <div style={headerStyle}>
          <p>
            App Name
          </p>

          <ButtonComponent
            buttonText={this.props.buttonText}
            link={this.props.link}/>
        </div>
      </div>
    );
  }
});

export default HeaderComponent;
