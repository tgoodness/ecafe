import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import auth from '../config/auth';
import {
  PersonOutlined,
  LockOutlined,
  SendOutlined,
  PowerSettingsNewOutlined,
} from '@material-ui/icons';

import changePasswordModal from '../../components/change-password/core/ModalHandler';
import ChangePassword from '../../components/change-password/ChangePassword';

import './style/header.scss';

function AccountMenu({ anchorEl, open, handleClose }) {
  const history = useHistory();
  const SignOut = () => {
    auth.logout(() => {
      history.replace('/');
    });
  };

  const [visible, showModal, handleCancel] = changePasswordModal(handleClose);
  return (
    <>
      <Menu
        id="menu-appbar"
        className="account-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <Link to="/profile">
          <MenuItem>
            <PersonOutlined />
            Profile
          </MenuItem>
        </Link>

        <Link to="/send-crypto">
          <MenuItem>
            <SendOutlined />
            Send Crypto
          </MenuItem>
        </Link>

        <MenuItem onClick={showModal}>
          <LockOutlined />
          Change Password
        </MenuItem>

        <MenuItem onClick={SignOut}>
          <PowerSettingsNewOutlined />
          Log Out
        </MenuItem>
      </Menu>
      <ChangePassword visible={visible} handleCancel={handleCancel} />
    </>
  );
}

export default AccountMenu;
