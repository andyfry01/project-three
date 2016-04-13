import React from 'react';
import TitleComponent from './TitleComponent';
import ButtonComponent from '../components/ButtonComponent';

const HeaderComponent = React.createClass({
  render: function() {

    var headerStyle = {
      backgroundColor: 'black',
      color: 'white',
      lineHeight: '50px',
    };

    var pStyle = {
      margin: '20px',
    }

    return (
      <div className="main-container">
        {this.props.children}

        <div style={headerStyle}>
          <p>
            App Name
          </p>

          <ButtonComponent/>


        </div>
      </div>
    );
  }
});

export default HeaderComponent;
