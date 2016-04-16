import React from 'react';

const TitleComponent = React.createClass({
  render: function(){

    let logoStyle = {
      backgroundColor: 'rgba(142, 38, 113, .8)',
      color: 'rgba(168, 168, 168, 1)',
      borderRadius: '50%',
      width: '120px',
      height: '120px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px',
    }

    return (
      <div className='landingFlex'>
        <h1 style={logoStyle}>APP</h1>
      </div>
    );
  }
});

export default TitleComponent;
