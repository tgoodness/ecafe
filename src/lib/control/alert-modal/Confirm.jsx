import React from 'react';
import Button from '../Button';
import Icon from '../../img/dashboard/alert-icon/confirm.svg';
import './style/confirm.scss';

function Confirm({ message, handleCancel, isLoading, handleConfirm }) {
  return (
    <>
      <img src={Icon} alt="Success Icon" className="animate__animated animate__zoomIn" />
      <div className="animate__animated animate__fadeInBottomLeft">
        <h5>CONFIRM</h5>
        <h6>{message}</h6>
      </div>
      <div className="btn__group">
        <button className="btn btn-default" onClick={handleCancel}>
          Cancel
        </button>
        <Button className="btn btn-info" label="Yes" loading={isLoading} onClick={handleConfirm} />
      </div>
    </>
  );
}

export default Confirm;
