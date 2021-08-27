import React from 'react';
import Pageview from '../../lib/layout/Pageview';
import Input from '../../lib/control/Input';
import InputImage from '../../lib/control/InputImage';
import Select from '../../lib/control/Select';
import Button from '../../lib/control/Button';

//import formHandler from './core/FormHandler';
import NGN from '.././../lib/assets/currency/ngn.png';
import '../../lib/style/send-crypto.scss';
import formHandler from './core/FormHandler';
import modalHandler from './otp/core/ModalHandler';
import OTP from './otp/OTP';

function SendCrypto() {
  const [
    type,
    handleType,
    amount,
    handleAmount,
    walletAddress,
    handleWalletAddress,
    priority,
    handlePriority,
  ] = formHandler();

  const [visible, showModal, handleCancel] = modalHandler();

  return (
    <Pageview title="Send Crypto">
      <div className="row send-crypto">
        <div className="offset-md-3 col-md-6">
          <Select
            label="Select Type"
            items={['Bitcoin', 'Ethereum']}
            value={type.value}
            onChange={handleType}
            error={type.error}
            helperText={type.helperText}
          />
          <InputImage
            label="Amount"
            img={NGN}
            value={amount.value}
            onChange={handleAmount}
            error={amount.error}
            helperText={amount.helperText}
          />
          <Input
            label="Wallet Address"
            value={walletAddress.value}
            onChange={handleWalletAddress}
            error={walletAddress.error}
            helperText={walletAddress.helperText}
          />
          <Select
            label="Select Priority"
            value={priority.value}
            onChange={handlePriority}
            error={priority.error}
            helperText={priority.helperText}
            items={['Low', 'Medium', 'High']}
          />
          <Button label="Update" className="btn btn-warning btn-block" onClick={showModal} />
        </div>
      </div>

      <OTP visible={visible} handleCancel={handleCancel} />
    </Pageview>
  );
}

export default SendCrypto;
