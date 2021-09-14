import React from 'react';
import { Modal } from 'antd';

import Input from '../../../lib/control/Input';
import Alert from '../../../lib/control/Alert';
import Select from '../../../lib/control/Select';
import Button from '../../../lib/control/Button';
import formHandler from './core/FormHandler';
import addRequest from './core/AddAdmin';

function AddAdmin(props) {
  const { visible, handleCancel } = props;
  const [email, handleEmail, role, handleRole] = formHandler();
  const [state, handleSubmit, handleClose] = addRequest(email.value, role.value, handleCancel);

  return (
    <Modal
      title="Add Admin"
      visible={visible}
      onCancel={handleCancel}
      footer={false}
      centered={true}
      maskClosable={false}
      className="add-admin"
      destroyOnClose={true}
    >
      <Input
        label="Email Address"
        value={email.value}
        type="email"
        onChange={handleEmail}
        error={email.error}
        helperText={email.helperText}
      />

      <Select
        label="Roles"
        value={role.value}
        onChange={handleRole}
        error={role.error}
        helperText={role.helperText}
        items={['Customer Service', 'Super Service', 'Principal']}
      />

      <div className="mt-3">
        <Button
          loading={state.loading}
          onClick={handleSubmit}
          className="btn btn-warning btn-block"
          label="Add Now"
        />
      </div>

      <Alert open={state.open} msg={state.message} onClose={handleClose} />
    </Modal>
  );
}

export default AddAdmin;
