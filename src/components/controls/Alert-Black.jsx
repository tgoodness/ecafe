import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function SimpleSnackbar(props) {
 
  const { open, msg, onClose, vertical="top", horizontal="right" } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical,
       horizontal
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
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
}
