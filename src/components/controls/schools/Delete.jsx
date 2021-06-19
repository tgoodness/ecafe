import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//
import Alert from "../Alert-Black";
import DeleteSchools from "../../core/schools/delete";
export default function AlertDialog(props) {
  const { schoolId, open, handleClose } = props;
  const [state, handleDelete, handleCloseA] = DeleteSchools(
    schoolId,
    handleClose
  );

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete School?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deleting this will automatically delete all the school related
            payment.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            {state.loading ? "Loading..." : " Yes, do it!"}
          </Button>
        </DialogActions>
      </Dialog>

      <Alert
        open={state.open}
        msg={state.message}
        type={state.type}
        onClose={handleCloseA}
      />
    </div>
  );
}
