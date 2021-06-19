import React, { useState } from "react";
import fn from "../../services/func";
function PasswordHandler() {
  // OLD PASSWORD
  const [oldPassword, setOldPassword] = React.useState({
    value: "",
    error: false,
    helperText: "",
    showPassword: false,
  });

  const handleShow = () => {
    setOldPassword({ ...oldPassword, showPassword: !oldPassword.showPassword });
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  const handleOldPassword = (prop) => (event) => {
    const value = event.target.value;
    setOldPassword({ ...oldPassword, [prop]: value });

    if (fn.isStrongPassword(value)) {
      setOldPassword({
        ...oldPassword,
        value: value,
        error: false,
        helperText: "",
      });
    } else {
      if (value === "") {
        setOldPassword({
          ...oldPassword,
          value: value,
          helperText: "This field is required",
          error: true,
        });
      } else {
        setOldPassword({
          ...oldPassword,
          value: value,
          helperText: "Old password is invalid",
          error: true,
        });
      }
    }
  };

  //NEW PASSWORD
  const [newPassword, setNewPassword] = useState({
    value: "",
    error: false,
    helperText: "",
  });
  const handleNewPassword = (e) => {
    const value = e.target.value;

    if (fn.isStrongPassword(value)) {
      setNewPassword({
        ...newPassword,
        value: value,
        helperText: "",
        error: false,
      });
    } else {
      if (value === "") {
        setNewPassword({
          ...newPassword,
          value: value,
          helperText: "This field is required",
          error: true,
        });
      } else {
        setNewPassword({
          ...newPassword,
          helperText:
            "Password must be 8 characters long, and atleast 1 number",
          error: true,
          value: value,
        });
      }
    }
  };

  //CONFRIM PASSWORD
  const [confirm, setConfirm] = useState({
    value: "",
    error: false,
    helperText: "",
  });
  const handleConfirm = (e) => {
    const value = e.target.value;

    if (value === newPassword.value) {
      setConfirm({
        ...confirm,
        value: value,
        helperText: "",
        error: false,
      });
    } else {
      if (value === "") {
        setConfirm({
          ...confirm,
          value: value,
          helperText: "This field is required",
          error: true,
        });
      } else {
        setConfirm({
          ...confirm,
          helperText: "Password mismatch",
          error: true,
          value: value,
        });
      }
    }
  };

  return [
    oldPassword,
    handleShow,
    handleMouseDown,
    handleOldPassword,
    newPassword,
    handleNewPassword,
    confirm,
    handleConfirm,
  ];
}

export default PasswordHandler;
