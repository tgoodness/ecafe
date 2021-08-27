import { useState } from 'react';
import util from '../../../../lib/service/util';

function Handler() {
  const [email, setEmail] = useState({
    value: '',
    error: false,
    helperText: '',
  });

  const handleEmail = (e) => {
    const value = e.target.value;

    if (util.isEmail(value)) {
      setEmail({
        value: value,
        error: false,
        helperText: '',
      });
    } else {
      if (value === '') {
        setEmail({
          value: value,
          helperText: 'This field is required',
          error: true,
        });
      } else {
        setEmail({
          value: value,
          helperText: 'Email is invalid',
          error: true,
        });
      }
    }
  };

  const [role, setRole] = useState({
    value: '',
    error: false,
    helperText: '',
  });

  const handleRole = (e) => {
    const value = e.target.value;

    if (value !== '') {
      setRole({
        value: value,
        error: false,
        helperText: '',
      });
    } else {
      setRole({
        value: value,
        helperText: 'This field is required',
        error: true,
      });
    }
  };

  return [email, handleEmail, role, handleRole];
}

export default Handler;
