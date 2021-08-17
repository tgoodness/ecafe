import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const Button = (probs) => {
  const { label, loading = false, ...rest } = probs;

  return (
    <div className={'animate__animated animate__jello'}>
      <button type="submit" {...(loading && { disabled: true })} {...rest}>
        {(loading && (
          <span>
            <LoadingOutlined />
            &nbsp; Loading...
          </span>
        )) ||
          label}
      </button>
    </div>
  );
};

export default Button;
