import React from 'react';
import TitleComponent from './TitleComponent';
import ButtonComponent from '../components/ButtonComponent';
import {Link} from 'react-router';

const HeaderComponent = React.createClass({

  render: function() {

    let headerStyle = {
      backgroundColor: 'rgba(0,0,0,.8)',
      color: '#fff',
      lineHeight: '50px',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '30px',
      position: 'absolute',
      overflowY: 'scroll',
      top: '0',
      width: '100%',
      zIndex: '1',
    };

    return (
      <div>
        <div style={headerStyle}>
          <p>
            App Name
          </p>

          <ButtonComponent
            buttonText={this.props.buttonText}
            link={this.props.link}
          />

        </div>
      </div>
    );
  }
});

export default HeaderComponent;
