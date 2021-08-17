import React from 'react';
import Icon from '../../img/dashboard/alert-icon/info.svg';

function Info({ message, handleCancel }) {
  return (
    <div className="warning-alert-wrapper">
      <img src={Icon} alt="Success Icon" className="animate__animated animate__zoomIn" />
      <div className="animate__animated animate__fadeInBottomLeft">
        <h5>Dear honourable</h5>
        <h6>{message}</h6>
      </div>

      <button className="btn btn-info" onClick={handleCancel}>
        Okay
      </button>
    </div>
  );
}

export default Info;
