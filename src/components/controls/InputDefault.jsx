import React from "react";
import TextField from "@material-ui/core/TextField";
export default function Input(props) {
  const { label, type, defaultValue, ...rest } = props;

  return (
    <TextField
      className="text-field"
      variant="outlined"
      label={label}
      tpe={type}
      defaultValue={defaultValue}
      {...rest}
    />
  );
}
