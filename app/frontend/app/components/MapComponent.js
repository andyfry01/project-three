import React from 'react';

const MapComponent = React.createClass({

  countryName: function(e){
    this.props.countryInput(e);
  },

  render: function(){
    return (
      <div className='mapBox'>
        <p>This is where the Map or Input Field goes</p>

        <input placeholder='enter a country' onChange={this.countryName}/>
        <button onClick={this.props.onSubmit}>Go!</button>
        <br/>
        <br/>
      </div>
    );
  }
});

export default MapComponent;
