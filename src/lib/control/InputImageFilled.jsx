import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Info from '@material-ui/icons/Info';

export default function InputImage(props) {
  const {
    value,
    type,
    onChange,
    label,
    name,
    error = null,
    helperText,
    disabled = null,
    img,
  } = props;

  return (
    <FormControl variant="filled" className="text-field">
      <InputLabel htmlFor="standard-adornment-password ">{label}</InputLabel>
      <FilledInput
        type={type}
        value={value}
        label={label}
        id="filled-adornment-password"
        name={name}
        disabled={disabled}
        {...(error && { error: true })}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" tabIndex="-1">
              <img src={img} alt="Addon" width="25" />
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
