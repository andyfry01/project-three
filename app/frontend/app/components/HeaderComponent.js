import React from 'react';
import TitleComponent from './TitleComponent';
import ButtonComponent from '../components/ButtonComponent';

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
