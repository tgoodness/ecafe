import { useReducer } from "react";
import { init, reducer } from "../../reducers/post-data";
import request from "../../https/request";

function ChangePin(oldPin, newPin, confirm, registrationId) {
 
    const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE_ALERT" });
  };

  const [state, dispatch] = useReducer(reducer, init);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (oldPin.length === 4 && newPin.length === 4 && confirm.length === 4) {
      if (newPin === confirm) {
        dispatch({ type: "REQUEST_LOADING" });
        request.changePin(oldPin, newPin, registrationId).then(
          (response) => {
            if (response.data.status === "success") {
              dispatch({
                type: "REQUEST_SUCCESS",
                payload: response.data.data,
              });
            } else {
              dispatch({ type: "REQUEST_FAILED", message: response });
            }
          },
          (error) => {
            dispatch({ type: "REQUEST_ERROR", message: error });
          }
        );
      } 
    } 
  };

  return [state, handleSubmit, handleClose];
}

export default ChangePin;
