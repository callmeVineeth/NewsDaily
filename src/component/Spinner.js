import React, { Component } from 'react';
import loading from './loading.gif'; // Import your GIF file

class Spinner extends Component {
  render() {
 
    const SpinnerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
       // Ensure the component takes up the full viewport height
    };

    const imgStyle = {
      height: '100px',
      width: '10%',
      alignItems: 'center', // Use camelCase for CSS properties
      justifyContent: 'center', // Use camelCase for CSS properties
      display: 'flex', // Add quotes to 'flex' value
    };

    return (
      <div style={SpinnerStyle}>
        <img src={loading} alt='loading' style={imgStyle} />
      </div>
    );
  }
}

export default Spinner;
