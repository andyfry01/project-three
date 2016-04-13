import React from 'react';

const HeaderComponent = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        {this.props.children}
      </div>
    );
  }
});

export default HeaderComponent;
