import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import fn from '../service/func';

export default function SimpleSelect(prob) {
  const { name, label, value, error = null, onChange, helperText, items, object = false } = prob;

  return (
    <FormControl variant="filled" className="text-field">
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={onChange}
        name={name}
        label={label}
        object={object}
        {...(error && { error: true })}
      >
        {items.map((item) => {
          return object === true ? (
            <MenuItem key={fn.randomNumber() + item.bankCode} value={item.bankCode}>
              {item.bankName}
            </MenuItem>
          ) : (
            <MenuItem key={fn.randomNumber() + item} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>

      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
