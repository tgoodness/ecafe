import React from 'react';
import Icon from '../../img/dashboard/alert-icon/error.svg';

function ErrorMessage({ message, handleCancel }) {
  return (
    <div className="error-alert-wrapper">
      <img src={Icon} alt="Success Icon" className="animate__animated animate__zoomIn" />
      <div className="animate__animated animate__fadeInBottomLeft">
        <h5>ERROR</h5>
        <h6>{message}</h6>
      </div>
      <button className="btn btn-danger" onClick={handleCancel}>
        Okay
      </button>
    </div>
  );
}

export default ErrorMessage;
