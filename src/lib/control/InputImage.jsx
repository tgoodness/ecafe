import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Info from '@material-ui/icons/Info';

export default function Input(props) {
  const {
    value,
    type,
    name,
    onChange,
    label,
    error = null,
    helperText,
    disabled = null,
    id = null,
    img,
  } = props;

  return (
    <FormControl variant="outlined" className="text-field">
      <InputLabel htmlFor="outlined-adornment-password ">{label}</InputLabel>
      <OutlinedInput
        type={type}
        value={value}
        label={label}
        name={name}
        id={id}
        disabled={disabled}
        {...(error && { error: true })}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end" >
            <img src={img} width="25" alt="Addon Icon" />
          </InputAdornment>
        }
        labelWidth={70}
        autoComplete="off"
      />
      <FormHelperText className="text-danger">
        {error && <Info style={{ fontSize: '15px' }} />} {helperText}
      </FormHelperText>
    </FormControl>
  );
}
