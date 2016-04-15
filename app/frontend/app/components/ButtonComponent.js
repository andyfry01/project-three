import React from 'react';
import {Link} from 'react-router';

const ButtonComponent = React.createClass({

  render: function() {
    console.log("props for ButtonComponent are:", this.props);
    var pStyle = {
      color: 'white',
    }
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
