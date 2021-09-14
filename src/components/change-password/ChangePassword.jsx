import React from 'react';
import { Modal, Avatar } from 'antd';
import Input from '../../lib/control/Input';
import Alert from '../../lib/control/Alert';
import FormControl from '../../lib/control/FormControl';
import Button from '../../lib/control/Button';
import formHandler from './core/FormHandler';
import changePasswordRequest from './core/ChangePasswordRequest';

import global from '../../lib/service/global';
import misc from '../../lib/service/misc';
import '../../lib/style/change-password.scss';

function ChangePassword(props) {
  const { visible, handleCancel } = props;
  const [
    password,
    showPassword,
    mouseDown,
    handlePasword,
    newPassword,
    handleNewPassword,
    confirm,
    handleConfirm,
  ] = formHandler();

  const [state, handleSubmit, handleClose] = changePasswordRequest(
    password.value,
    newPassword.value,
    confirm.value,
    handleCancel
  );

  const { GetImage } = global();

  return (
    <Modal
      title="Change Password"
      visible={visible}
      onCancel={handleCancel}
      footer={false}
      centered={true}
      maskClosable={false}
    >
      <div className="change-password">
        <div className="avater-wrapper">
          <Avatar src={misc.adminImage(GetImage())} size={100} />
        </div>

        <FormControl
          label="Password"
          type={password.showPassword}
          value={password.password}
          onChange={handlePasword('password')}
          error={password.error}
          helperText={password.helperText}
          onClick={showPassword}
          onMouseDown={mouseDown}
        />

        <Input
          label="New Password"
          value={newPassword.value}
          type="password"
          onChange={handleNewPassword}
          error={newPassword.error}
          helperText={newPassword.helperText}
        />

        <Input
          label="Confirm"
          type="password"
          value={confirm.value}
          onChange={handleConfirm}
          error={confirm.error}
          helperText={confirm.helperText}
        />
        <div className="btn-wrapper">
          <Button
            className="btn btn-warning btn-block"
            label="Change"
            loading={state.loading}
            onClick={handleSubmit}
          />
        </div>
      </div>
      <Alert open={state.open} msg={state.message} onClose={handleClose} />
    </Modal>
  );
}

export default ChangePassword;
