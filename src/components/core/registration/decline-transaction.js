import { useReducer } from "react";
import { init, reducer } from "../../reducers/post-data";
import request from "../../https/request";

function DeclineTransaction(formData,closeModal) {
  const [state, dispatch] = useReducer(reducer, init);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE_ALERT" });
  };

  const handleDecline = () => {
    dispatch({ type: "REQUEST_LOADING" });
    request.declineTransaction(formData).then(
      (response) => {
        if (response.data.status === "success") {
          dispatch({
            type: "REQUEST_SUCCESS",
            payload: response.data.data,
            message:"Decline Successful"
          });
        } else {
          dispatch({ type: "REQUEST_FAILED", message: response });
        }
        closeModal()
      },
      (error) => {
        dispatch({ type: "REQUEST_ERROR", message: error });
       closeModal()
      }
    );
  };

  return [state, handleDecline, handleClose];
}

export default DeclineTransaction;
