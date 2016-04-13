import React from 'react';

const MapComponent = React.createClass({
  render: function(){
    return (
      <div>
        <p>This is where the Map or Input Field goes</p>

        <input placeholder='enter a country' />
        <button type='button'>Go!</button>
      </div>
    );
  }
});

export default MapComponent;
