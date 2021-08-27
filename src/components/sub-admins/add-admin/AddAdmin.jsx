import React from 'react';
import { Modal } from 'antd';
import { AccountCircleOutlined } from '@material-ui/icons';

import Input from '../../../lib/control/Input';
import Select from '../../../lib/control/Select';
import Button from '../../../lib/control/Button';
import formHandler from './core/FormHandler';
import '../../../lib/style/add-admin.scss';

function AddAdmin(props) {
  const { visible, handleCancel } = props;
  const [email, handleEmail, role, handleRole] = formHandler();
  return (
    <Modal
      title="Add Admin"
      visible={visible}
      onCancel={handleCancel}
      footer={false}
      centered={true}
      maskClosable={false}
      className="add-admin"
    >
      <div className="user-icon-wrapper">
        <AccountCircleOutlined />
      </div>
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
      <div className="btn-wrapper">
        <Button className="btn btn-warning btn-block" label="Add Now" loading={false} />
      </div>
    </Modal>
  );
}

export default AddAdmin;
