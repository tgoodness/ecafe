import { useState } from "react";
import fn from "../services/func";

export default function useHandlePassword() {
  // Password Start Here
  const [password, setPassword] = useState({
    value: "",
    error: false,
    helperText: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePaswordChange = (prop) => (event) => {
    const value = event.target.value;
    setPassword({ ...password, [prop]: value });

    if (fn.isPassword(value)) {
      setPassword({
        ...password,
        value: value,
        error: false,
        helperText: "",
      });
    } else {
      if (value === "") {
        setPassword({
          ...password,
          helperText: "This field is required",
          error: true,
        });
      } else {
        setPassword({
          ...password,
          helperText: "Password is invalid",
          error: true,
        });
      }
    }
  };

  return [
    password,
    handleClickShowPassword,
    handleMouseDownPassword,
    handlePaswordChange,
  ];
}
