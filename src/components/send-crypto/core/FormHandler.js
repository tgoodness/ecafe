import { useState } from 'react';

function FormHandler() {
  const [type, setType] = useState({
    value: '',
    error: false,
    helperText: '',
  });

  const handleType = (e) => {
    const value = e.target.value;

    if (value !== '') {
      setType({
        value: value,
        error: false,
        helperText: '',
      });
    } else {
      setType({
        value: value,
        helperText: 'This field is required',
        error: true,
      });
    }
  };

  const [amount, setAmount] = useState({
    value: '',
    error: false,
    helperText: '',
  });

  const handleAmount = (e) => {
    const value = e.target.value;

    if (value !== '') {
      setAmount({
        value: value,
        error: false,
        helperText: '',
      });
    } else {
      setAmount({
        value: value,
        helperText: 'This field is required',
        error: true,
      });
    }
  };

  const [walletAddress, setWalletAddress] = useState({
    value: '',
    error: false,
    helperText: '',
  });

  const handleWalletAddress = (e) => {
    const value = e.target.value;

    if (value !== '') {
      setWalletAddress({
        value: value,
        error: false,
        helperText: '',
      });
    } else {
      setWalletAddress({
        value: value,
        helperText: 'This field is required',
        error: true,
      });
    }
  };

  const [priority, setPriority] = useState({
    value: '',
    error: false,
    helperText: '',
  });

  const handlePriority = (e) => {
    const value = e.target.value;

    if (value !== '') {
      setPriority({
        value: value,
        error: false,
        helperText: '',
      });
    } else {
      setPriority({
        value: value,
        helperText: 'This field is required',
        error: true,
      });
    }
  };

  return [
    type,
    handleType,
    amount,
    handleAmount,
    walletAddress,
    handleWalletAddress,
    priority,
    handlePriority,
  ];
}

export default FormHandler;
