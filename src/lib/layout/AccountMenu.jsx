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

import './style/header.scss';

function AccountMenu({ anchorEl, open, handleClose }) {
  const history = useHistory();
  const SignOut = () => {
    auth.logout(() => {
      history.replace('/');
    });
  };

  return (
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

      <Link to="/change-password">
        <MenuItem>
          <LockOutlined />
          Change Password
        </MenuItem>
      </Link>
      <MenuItem onClick={SignOut}>
        <PowerSettingsNewOutlined />
        Log Out
      </MenuItem>
    </Menu>
  );
}

export default AccountMenu;
