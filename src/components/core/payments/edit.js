import { useReducer, useRef } from "react";
import { init, reducer } from "../../reducers/post-data";
import request from "../../https/request";
import { useHistory } from "react-router-dom";

function Edit(id, closeModal) {
  //initialize inputRef values since we're using  uncontrol component
  const paymentType = useRef(null);
  const amount = useRef(null);
  const charges = useRef(null);

  const [state, dispatch] = useReducer(reducer, init);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE_ALERT" });
  };

  const history = useHistory();
  const handleEdit = (e) => {
    e.preventDefault();

    //consume inputRef values
    const _payment = paymentType.current.value;
    const _amount = amount.current.value;
    const _charges = charges.current.value;

    if (_payment !== "" || _amount !== "" || _charges !== "" || id !== "") {
      dispatch({ type: "REQUEST_LOADING" });
      request.editPayment(_payment, _amount, _charges, id).then(
        (response) => {
          if (response.data.status === "success") {
            dispatch({
              type: "REQUEST_SUCCESS",
              payload: response.data.data,
              message: "Edited succesfully",
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

  return [paymentType, amount, charges, state, handleEdit, handleClose];
}

export default Edit;
