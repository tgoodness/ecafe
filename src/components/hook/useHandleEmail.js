import { useState } from "react";
import fn from "../services/func";

function useHandleEmail() {
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

  return [email, handleEmailChange];
}

export default useHandleEmail;
