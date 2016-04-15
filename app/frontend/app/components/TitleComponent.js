import React from 'react';

const TitleComponent = React.createClass({
  render: function(){

    let logoStyle = {
      backgroundColor: '#999',
      color: 'white',
      borderRadius: '50%',
      width: '120px',
      height: '120px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px',
    }

    return (
      <div className='titleComp'>
        <h1 style={logoStyle}>APP</h1>
      </div>
    )
  }
})

export default TitleComponent;
