import React from 'react';

const MapComponent = React.createClass({

  countryName: function(e){
    this.props.countryInput(e);
  },

  render: function(){

    let divStyle = {
      width: '90%',
      margin: 'auto',
      position: 'relative',
      display: 'flex',
      top: '20px',
      textAlign: 'center',
      padding: '20px 20px 50px',
    };

    return (
      <div style={divStyle}>
        <object type="image/svg+xml" data="../map/worldLow.svg"></object>
        <input placeholder='enter a country' onChange={this.countryName}/>
        <button onClick={this.props.onSubmit}>Go!</button>
        <br/>
        <br/>
      </div>
    );
  }
});

export default MapComponent;
