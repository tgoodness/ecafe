import { useReducer } from "react";
import { init, reducer } from "../../reducers/fetch-data";
import request from "../../https/request";

function VerifyAccount() {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE_ALERT" });
  };

  const [state, dispatch] = useReducer(reducer, init);
  const verify = (accountNumber, bankCode, reset) => {
    if (accountNumber !== "" && bankCode !== "") {
      dispatch({ type: "REQUEST_LOADING" });
    
      request.verifyAccountNumber(accountNumber, bankCode).then(
        (response) => {
          if (response.data.status === "success") {
            dispatch({
              type: "REQUEST_SUCCESS",
              payload: response.data.data,
            });
          } else {
            dispatch({ type: "REQUEST_FAILED", message: response });
            reset();
          }
        },
        (error) => {
          dispatch({ type: "REQUEST_ERROR", message: error });
          reset();
        }
      );
    }
  };

  const accountName =
    state.message === "success" ? state.payload.accountName : "";
  return [state, verify, accountName, handleClose];
}

export default VerifyAccount;
