import React from 'react';
import { Modal } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Alert from '../../lib/control/Alert';
import manageRequest from './core/ManageRequest';

function Manage(props) {
  const { action, registrationId, visible, handleCancel } = props;
  const lock = action === 'Enable' ? 'Unlock' : 'Lock';
  const [state, handleSubmit, handleClose] = manageRequest(lock, registrationId, handleCancel);

  return (
    <Modal
      className="confirm-modal"
      visible={visible}
      onCancel={handleCancel}
      footer={false}
      closable={false}
    >
      <h6>{action} this user?</h6>
      <div className="confirm-modal-wrapper">
        <h5 onClick={handleCancel}>CANCEL</h5>
        <h5 onClick={handleSubmit}> {state.loading ? <LoadingOutlined /> : 'CONFIRM'}</h5>
      </div>
      <Alert open={state.open} msg={state.message} onClose={handleClose} />
    </Modal>
  );
}

export default Manage;
