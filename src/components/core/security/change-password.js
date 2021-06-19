import { useReducer } from "react";
import { init, reducer } from "../../reducers/post-data";
import request from "../../https/request";

function ChangePassword(oldPassword, newPassword, confirm, registrationId) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE_ALERT" });
  };

  const [state, dispatch] = useReducer(reducer, init);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (oldPassword !== "" && newPassword !== "" && confirm !== "") {
      if (newPassword === confirm) {
        dispatch({ type: "REQUEST_LOADING" });
        request.changePassword(oldPassword, newPassword, registrationId).then(
          (response) => {
            if (response.data.status === "success") {
              dispatch({
                type: "REQUEST_SUCCESS",
                payload: response.data.data,
                message: "Changed Successfully",
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

export default ChangePassword;
