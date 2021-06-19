import { useReducer } from "react";
import { init, reducer } from "../../reducers/post-data";
import request from "../../https/request";
import { useHistory } from "react-router-dom";


function Add(paymentType, amount, charges, schoolId,closeModal) {
  const [state, dispatch] = useReducer(reducer, init);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE_ALERT" });
  };
  
  const history = useHistory();
  const handleAdd = (e) => {
    e.preventDefault();
    if (
      paymentType !== "" &&

      schoolId !== ""
    ) {
      dispatch({ type: "REQUEST_LOADING" });
      request.addPayment(paymentType, amount, charges, schoolId).then(
        (response) => {
          if (response.data.status === "success") {
            dispatch({
              type: "REQUEST_SUCCESS",
              payload: response.data.data,
              message: "Added Scuccessfully",
            });
            //Auto reload
            history.go(0);
          } else {
            dispatch({ type: "REQUEST_FAILED", message: response });
          }
          closeModal();
        },
        (error) => {
          dispatch({ type: "REQUEST_ERROR", message: error });
        }
      );
    }
  };

  return [state, handleAdd, handleClose];
}

export default Add;
