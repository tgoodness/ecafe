import React from 'react';
import Icon from '../../img/dashboard/alert-icon/warning.svg';

function Warning({ message, handleCancel }) {
  return (
    <div className="warning-alert-wrapper">
      <img src={Icon} alt="Success Icon" className="animate__animated animate__zoomIn" />
      <div className="animate__animated animate__fadeInBottomLeft">
        <h5>WARNING</h5>
        <h6>{message}</h6>
      </div>

      <button className="btn btn-warning" onClick={handleCancel}>
        Okay
      </button>
    </div>
  );
}

export default Warning;
