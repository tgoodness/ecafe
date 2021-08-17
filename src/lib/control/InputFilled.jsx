import React from 'react';
import InputField from '@material-ui/core/TextField';
export default function Input(props) {
  const {
    name,
    label,
    value,
    error = null,
    type,
    onChange,
    helperText,
    disabled = false,
    multiline = false,
    row = null,
    ...rest
  } = props;

  return (
    <InputField
      {...(disabled && { disabled: true })}
      className="text-field"
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: helperText })}
      {...(multiline && { multiline: true })}
      rows={row}
      {...rest}
    />
  );
}
