import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

export default function Alert(props) {
  const { open, msg, onClose, vertical = 'bottom', horizontal = 'center' } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical,
        horizontal,
      }}
      open={open}
      autoHideDuration={2500}
      onClose={onClose}
      message={msg}
      action={
        <React.Fragment>
          <Button color="secondary" size="small" onClick={onClose}>
            CLOSE
          </Button>
        </React.Fragment>
      }
    />
  );
}
