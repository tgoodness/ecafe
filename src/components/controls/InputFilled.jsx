import React from "react";
import TextField from "@material-ui/core/TextField";
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
  } = props;

  return (
    <TextField
      {...(disabled && { disabled: true })}
      className="text-field"
      variant="filled"
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: helperText })}
      {...(multiline && { multiline: true })}
      rows={row}
    />
  );
}


