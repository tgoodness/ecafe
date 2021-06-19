import { useReducer } from "react";
import { init, reducer } from "../../reducers/post-data";
import request from "../../https/request";

function TransferFund(
  paymentReference,
  registrationId,
  accountNumber,
  bankCode
) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE_ALERT" });
  };

  const [state, dispatch] = useReducer(reducer, init);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      paymentReference !== "" &&
      registrationId !== "" &&
      accountNumber !== "" &&
      bankCode !== ""
    ) {
      dispatch({ type: "REQUEST_LOADING" });
      request
        .transferFund(paymentReference, registrationId, accountNumber, bankCode)
        .then(
          (response) => {
            if (response.data.status === "success") {
              dispatch({
                type: "REQUEST_SUCCESS",
                payload: response.data.data,
                message: "Refunded Successfully",
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
  };

  return [state, handleSubmit, handleClose];
}

export default TransferFund;
