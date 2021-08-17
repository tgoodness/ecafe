import React from 'react';
import './style.scss';
import logo from '../../assets/logo.png';
function FallBack() {
  return (
    <div className="fallback">
      <img src={logo} alt="App Icon" width="70" />
    </div>
  );
}

export default FallBack;
