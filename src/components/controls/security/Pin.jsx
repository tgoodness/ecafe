import React from "react";
import Alert from "../Alert-Black";
import Input from "../Input";
import FormControl from "../FormControl";

//
import { Button } from "../Button";
import PinHandler from "../../core/security/pin-handler";
import ChangePin from "../../core/security/change-pin";
import fn from '../../services/func';

export const Pin = () => {
  const [
    oldPin,
    handleShow,
    handleMouseDown,
    handleOldPin,
    newPin,
    handleNewPin,
    confirm,
    handleConfirm,
  ] = PinHandler();

  //consume admin session data
  const adminBio = fn.getSession("admin", true);
  const registrationId = adminBio.registrationId;

  const [state, handleSubmit, handleClose] = ChangePin(
    oldPin.value,
    newPin.value,
    confirm.value,
    registrationId
  );

  return (
    <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
      <FormControl
        label="Old Pin"
        type={oldPin.showPin}
        value={oldPin.value}
        onChange={handleOldPin("password")}
        error={oldPin.error}
        helperText={oldPin.helperText}
        onClick={handleShow}
        onMouseDown={handleMouseDown}
      />

      <Input
        type="password"
        label="New Pin"
        name="newPassword"
        value={newPin.value}
        onChange={handleNewPin}
        error={newPin.error}
        helperText={newPin.helperText}
      />

      <Input
        type="password"
        label="Confirm"
        name="confirm"
        value={confirm.value}
        onChange={handleConfirm}
        error={confirm.error}
        helperText={confirm.helperText}
      />

      <p className="text-center mt-3">
        <Button label="Save Change" loading={state.loading} />
      </p>
      <Alert
        open={state.open}
        msg={state.message}
        type={state.type}
        onClose={handleClose}
      />
    </form>
  );
};
