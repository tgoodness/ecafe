import React, { useState } from "react";
import fn from "../../services/func";
function PinHandler() {
  // OLD PIN
  const [oldPin, setOldPin] = React.useState({
    value: "",
    error: false,
    helperText: "",
    showPin: false,
  });

  const handleShow = () => {
      setOldPin({ ...oldPin, showPin: !oldPin.showPin });
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  const handleOldPin = (prop) => (event) => {
    const value = event.target.value;
    setOldPin({ ...oldPin, [prop]: value });

    if (fn.strLen(value) === 4) {
      setOldPin({
        ...oldPin,
        value: value,
        error: false,
        helperText: "",
      });
    } else {
      if (value === "") {
        setOldPin({
          ...oldPin,
          value: value,
          helperText: "This field is required",
          error: true,
        });
      } else {
        setOldPin({
          ...oldPin,
          value: value,
          helperText: "Old pin is invalid",
          error: true,
        });
      }
    }
  };

  //NEW PIN
  const [newPin, setNewPin] = useState({
    value: "",
    error: false,
    helperText: "",
  });
  const handleNewPin = (e) => {
    const value = e.target.value;

    if (fn.strLen(value) === 4) {
      setNewPin({
        ...newPin,
        value: value,
        helperText: "",
        error: false,
      });
    } else {
      if (value === "") {
        setNewPin({
          ...newPin,
          value: value,
          helperText: "This field is required",
          error: true,
        });
      } else {
        setNewPin({
          ...newPin,
          helperText: "Pin must be 4 digit characters",
          error: true,
          value: value,
        });
      }
    }
  };

  //CONFRIM PIN
  const [confirm, setConfirm] = useState({
    value: "",
    error: false,
    helperText: "",
  });
  const handleConfirm = (e) => {
    const value = e.target.value;

    if (value === newPin.value) {
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
          helperText: "Pin mismatch",
          error: true,
          value: value,
        });
      }
    }
  };

  return [
    oldPin,
    handleShow,
    handleMouseDown,
    handleOldPin,
    newPin,
    handleNewPin,
    confirm,
    handleConfirm,
  ];
}

export default PinHandler;
