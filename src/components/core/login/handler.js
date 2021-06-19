import { useState } from "react";
import fn from "../../services/func";

function Handler() {
  const [email, setEmail] = useState({
    value: "",
    error: false,
    helperText: "",
  });

  const handleEmailChange = (e) => {
    const value = e.target.value;

    if (fn.isEmail(value)) {
      setEmail({
        value: value,
        error: false,
        helperText: "",
      });
    } else {
      if (value === "") {
        setEmail({
          value: value,
          helperText: "This field is required",
          error: true,
        });
      } else {
        setEmail({
          value: value,
          helperText: "Email is invalid",
          error: true,
        });
      }
    }
  };

  // Password Start Here
  const [password, setPassword] = useState({
    value: "",
    error: false,
    helperText: "",
    showPassword: false,
  });

  const showPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const mouseDown = (event) => {
    event.preventDefault();
  };

  const handlePasword = (prop) => (event) => {
    const value = event.target.value;
    setPassword({ ...password, [prop]: value });

    if (value !== "")
    {
      setPassword({
        ...password,
        value: value,
        error: false,
        helperText: "",
      });
    } else
    {
      setPassword({
        ...password,
        helperText: "This field is required",
        error: true,
      });
    }
  };

  return [
    email,
    handleEmailChange,
    password,
    showPassword,
    mouseDown,
    handlePasword,
  ];
}

export default Handler;
