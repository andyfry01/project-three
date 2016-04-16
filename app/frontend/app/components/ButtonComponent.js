import React from 'react';
import {Link} from 'react-router';

const ButtonComponent = React.createClass({

  render: function() {

    let pStyle = {
      fontSize: '15px',
      color: '#fff',
    };

    return (
      <div>
        <Link to={this.props.link}>
        <p style={pStyle}>{this.props.buttonText}</p>
        </Link>
      </div>
    );
  }
});

export default ButtonComponent;
