import { useReducer, useState } from "react";
import { init, reducer } from "../../reducers/post-data";
import request from "../../https/request";
function MarkAsDone(paymentReference, registrationId, closeModal) {
  //File
  const [metaData, setMetaData] = useState([]);
  const [files, setFile] = useState([]);

  const handleFile = (e) => {
    let value = e.target.files;
    setFile(value);
    //set metadata info
    const fileData = [];
    for (let i = 0; i < value.length; i++) {
      fileData.push({ fileName: value[i].name.split(".")[0] });
    }

    setMetaData(fileData);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE_ALERT" });
  };

  //simulate form data

  const formData = new FormData();
  formData.append("paymentReference", paymentReference);
  formData.append("operation", "approve");
  formData.append("registrationId", registrationId);
  for (let i = 0; i < files.length; i++) {
    formData.append(`attachment[${i}]`, files[i]);
  }

  //sent document directly to the user email and mark as done
  const [state, dispatch] = useReducer(reducer, init);
  const handleDone = (e) => {
    e.preventDefault();
    dispatch({ type: "REQUEST_LOADING" });
    request.markAsDone(formData).then(
      (response) => {
        if (response.data.status === "success") {
          dispatch({
            type: "REQUEST_SUCCESS",
            payload: response.data.data,
            message: "Operation Successful",
          });
        } else {
          dispatch({ type: "REQUEST_FAILED", message: response });
        }
        closeModal();
      },
      (error) => {
        dispatch({ type: "REQUEST_ERROR", message: error });
        console.log(error.response);
        closeModal();
      }
    );
  };

  return [handleFile, state, handleDone, metaData, handleClose];
}

export default MarkAsDone;
