import React from 'react';

const MapComponent = React.createClass({

  countryName: function(e){
    this.props.countryInput(e);
  },

  render: function(){

    let divStyle = {
      border: '1px solid red',
      width: '90%',
      margin: 'auto',
      position: 'relative',
      display: 'block',
      top: '20px',
      textAlign: 'center',
      fontSize: '20px',
    };

    return (
      <div style={divStyle}>

        <input placeholder='enter a country' onChange={this.countryName}/>
        <button onClick={this.props.onSubmit}>Go!</button>
        <br/>
        <br/>
      </div>
    );
  }
});

export default MapComponent;
