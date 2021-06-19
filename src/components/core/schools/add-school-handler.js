import { useState } from "react";

function AddSchoolHandler() {
  const [schoolName, setSchoolName] = useState({
    value: "",
    error: false,
    helperText: "",
  });

  const handleSchoolName = (e) => {
    const value = e.target.value;

    if (value !== "") {
      setSchoolName({
        value: value,
        error: false,
        helperText: "",
      });
    } else {
      setSchoolName({
        value: value,
        helperText: "School can not be empty",
        error: true,
      });
    }
  };

  return [schoolName, handleSchoolName];
}

export default AddSchoolHandler;
