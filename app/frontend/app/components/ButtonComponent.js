import React from 'react';

const ButtonComponent = React.createClass({
  render: function() {

    var pStyle = {
      color: 'white',
    }
    return (
      <div>
        <p style={pStyle}> View Playlist </p>
      </div>
    );
  }
});

export default ButtonComponent;
