import React from 'react';
import { Modal } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Alert from '../../../lib/control/Alert';
import formHandler from './core/FormHandler';
import confirmRequest from './core/ConfirmRquest';
import global from '../../../lib/service/global';
import '../../../lib/style/send-crypto-otp.scss';

function OTP(props) {
  const { reference, visible, handleCancel } = props;
  const [otp, handleOtp] = formHandler();
  const [state, handleSubmit, handleClose] = confirmRequest(otp, reference, handleCancel);
  const { Success, GetAdmin } = global();
  const profile = GetAdmin();

  if (!Success()) {
    return null;
  }

  const phoneNumber = `${profile.phoneNumber.substring(
    0,
    4
  )}********${profile.phoneNumber.substring(9, 11)}`;

  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      footer={false}
      maskClosable={false}
      destroyOnClose={true}
      className="send-crypto-otp"
    >
      {Success() && (
        <>
          <h5>Enter OTP</h5>
          <h6>
            Enter the OTP send to your phone number <span>{phoneNumber}</span>
          </h6>
          <input type="number" placeholder="******" min="0" value={otp} onChange={handleOtp} />

          <div className="buttons-wrapper">
            {state.loading ? (
              <LoadingOutlined />
            ) : (
              <>
                <span onClick={handleCancel}>CANCEL</span>
                <span onClick={handleSubmit}>CONFIRM</span>
              </>
            )}
          </div>
        </>
      )}
      <Alert open={state.open} msg={state.message} onClose={handleClose} />
    </Modal>
  );
}

export default OTP;
