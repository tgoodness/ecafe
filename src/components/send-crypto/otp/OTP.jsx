import React from 'react';
import { Modal } from 'antd';
import formHandler from './core/FormHandler';
import '../../../lib/style/send-crypto-otp.scss';

function OTP(props) {
  const { visible, handleCancel } = props;
  const [otp, handleOtp] = formHandler();
  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      footer={false}

      maskClosable={false}
      className="send-crypto-otp"
    >
      <h5>Enter OTP</h5>
      <h6>
        Enter the OTP send to your phone number <span> 0803********43</span>
      </h6>
      <input type="number" placeholder="******" min="0" value={otp} onChange={handleOtp} />

      <div className="buttons-wrapper">
        <span>RESEND</span>
        <span>CONFIRM</span>
      </div>
    </Modal>
  );
}

export default OTP;
