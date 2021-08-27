import { useState } from 'react';

function Handler() {
  const [password, setPassword] = useState({
    value: '',
    error: false,
    helperText: '',
    showPassword: false,
  });

  const showPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const mouseDown = (event) => {
    event.preventDefault();
  };

  const handlePasword = (prop) => (event) => {
    const value = event.target.value;
    setPassword({ ...password, [prop]: value });

    if (value !== '') {
      setPassword({
        ...password,
        value: value,
        error: false,
        helperText: '',
      });
    } else {
      setPassword({
        ...password,
        helperText: value === '' ? 'This field is required' : 'Mininmum of 6 characters',
        error: true,
      });
    }
  };

  const [newPassword, setNewPassword] = useState({
    value: '',
    error: false,
    helperText: '',
  });

  const handleNewPassword = (e) => {
    const value = e.target.value;

    if (value.length >= 6) {
      setNewPassword({
        value: value,
        error: false,
        helperText: '',
      });
    } else {
      setNewPassword({
        value: value,
        helperText: value === '' ? 'This field is required' : 'Mininmum of 6 characters',
        error: true,
      });
    }
  };

  const [confirm, setConfirm] = useState({
    value: '',
    error: false,
    helperText: '',
  });

  const handleConfirm = (e) => {
    const value = e.target.value;

    if (value.length >= 6 && newPassword.value === value) {
      setConfirm({
        value: value,
        error: false,
        helperText: '',
      });
    } else {
      setConfirm({
        value: value,
        helperText: value === '' ? 'This field is required' : 'Password mismatch',
        error: true,
      });
    }
  };
  return [
    password,
    showPassword,
    mouseDown,
    handlePasword,
    newPassword,
    handleNewPassword,
    confirm,
    handleConfirm,
  ];
}

export default Handler;
