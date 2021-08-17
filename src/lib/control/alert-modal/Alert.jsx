import React from 'react';
import { Modal } from 'antd';
import Success from './Success';
import Warning from './Warning';
import Error from './Error';
import Info from './Info';
import Confirm from './Confirm';
import './style/alert.scss';

function Alert(props) {
  const {
    type,
    message,
    visible,
    handleCancel,
    isLoading = null,
    handleConfirm = null,
    url = null,
    refresh = false,
  } = props;
  return (
    <Modal
      visible={visible}
      closable={false}
      footer={false}
      centered={true}
      onCancel={handleCancel}
    >
      <div className="modal-content-wrapper">
        {type === 'success' && (
          <Success message={message} handleCancel={handleCancel} url={url} refresh={refresh} />
        )}
        {type === 'warning' && <Warning message={message} handleCancel={handleCancel} />}
        {type === 'error' && <Error message={message} handleCancel={handleCancel} />}
        {type === 'info' && <Info message={message} handleCancel={handleCancel} />}
        {type === 'confirm' && (
          <Confirm
            message={message}
            handleCancel={handleCancel}
            isLoading={isLoading}
            handleConfirm={handleConfirm}
          />
        )}
      </div>
    </Modal>
  );
}

export default Alert;
