import React from 'react';
import { Modal, Avatar } from 'antd';
import Input from '../../lib/control/Input';
import FormControl from '../../lib/control/FormControl';
import Button from '../../lib/control/Button';
import formHandler from './core/FormHandler';
import AdminAvater from '../../lib/assets/avater.png';
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
          <Avatar src={AdminAvater} size={100} />
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
          label="Roles"
          type="password"
          value={confirm.value}
          onChange={handleConfirm}
          error={confirm.error}
          helperText={confirm.helperText}
        />
        <div className="btn-wrapper">
          <Button className="btn btn-warning btn-block" label="Change" loading={false} />
        </div>
      </div>
    </Modal>
  );
}

export default ChangePassword;
