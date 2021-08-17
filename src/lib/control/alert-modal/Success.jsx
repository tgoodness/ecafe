import React from 'react';
import { useHistory } from 'react-router-dom';
import Icon from '../../img/dashboard/alert-icon/success.svg';

function Success({ message, handleCancel, url, refresh }) {
  const history = useHistory();

  const handleNavigation = () => {
    if (refresh) {
      history.go(0);
    } else if (url === null) {
      handleCancel();
    } else {
      history.push(url);
    }
  };
  return (
    <div className="success-alert-wrapper">
      <img src={Icon} alt="Success Icon" className="animate__animated animate__zoomIn" />
      <div className="animate__animated animate__fadeInBottomLeft">
        <h5>SUCCESS</h5>
        <h6>{message}</h6>
      </div>

      <button className="btn btn-success" onClick={handleNavigation}>
        Okay
      </button>
    </div>
  );
}

export default Success;
