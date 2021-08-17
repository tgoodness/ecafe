import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputField from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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
    onClick,
    onMouseDown,
    disabled = null,
    id = null,
  } = props;

  return (
    <FormControl className="text-field">
      <InputLabel htmlFor="filled-adornment-password ">{label}</InputLabel>
      <InputField
        type={type ? 'text' : 'password'}
        value={value}
        label={label}
        name={name}
        id={id}
        disabled={disabled}
        {...(error && { error: true })}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClick}
              onMouseDown={onMouseDown}
              edge="end"
              tabIndex="-1"
            >
              {type ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        autoComplete="off"
      />
      <FormHelperText className="text-danger">
        {error && <Info style={{ fontSize: '15px' }} />} {helperText}
      </FormHelperText>
    </FormControl>
  );
}
