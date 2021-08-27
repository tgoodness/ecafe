import { useState } from 'react';

function Handler() {
  const [otp, setOtp] = useState('');

  const handleOtp = (e) => {
    const value = e.target.value;
    if ( value.length > 6) {
      return false;
    }
    setOtp(value);
  };

  return [otp, handleOtp];
}

export default Handler;
