import React from "react";

//
import Alert from "../Alert-Black";
import Input from "../Input";
import FormControl from "../FormControl";
import { Button } from "../Button";
import PasswordHandler from "../../core/security/password-handler";
import changePassword from "../../core/security/change-password";
import fn from "../../services/func";

export const Password = () => {
  const [
    oldPassword,
    showPassword,
    MouseDown,
    handleOldPassword,
    newPassword,
    handleNewPassword,
    confirm,
    handleConfirm,
  ] = PasswordHandler();

  //consume admin session data
  const adminBio = fn.getSession("admin", true);
  const registrationId = adminBio.registrationId;

  const [state, handleSubmit, handleClose] = changePassword(
    oldPassword.value,
    newPassword.value,
    confirm.value,
    registrationId
  );

  return (
    <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
      <FormControl
        label="Old Password"
        type={oldPassword.showPassword}
        value={oldPassword.value}
        onChange={handleOldPassword("password")}
        error={oldPassword.error}
        helperText={oldPassword.helperText}
        onClick={showPassword}
        onMouseDown={MouseDown}
      />

      <Input
        type="password"
        label="New Password"
        name="newPassword"
        value={newPassword.value}
        onChange={handleNewPassword}
        error={newPassword.error}
        helperText={newPassword.helperText}
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
