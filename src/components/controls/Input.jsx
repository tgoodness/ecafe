import React from "react";
import TextField from "@material-ui/core/TextField";
import Info from "@material-ui/icons/Info";
export default function Input(props) {
  const {
    label,
    value,
    error = null,
    type,
    onChange,
    helperText,
    disabled = null,
    multiline = false,
    row = null,
    ...rest
  } = props;

  return (
    <TextField
      className="text-field"
      variant="outlined"
      label={label}
     
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
      {...rest}
      {...(error && {
        error: true,
        helperText: (
          <span>
            <Info style={{ fontSize: "15px" }} />
            &nbsp;
            {helperText}
          </span>
        ),
      })}
      {...(multiline && { multiline: true })}
      rows={row}
    />
  );
}
