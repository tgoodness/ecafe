import { useReducer } from "react";
import { init, reducer } from "../../reducers/post-data";
import request from "../../https/request";
import { useHistory } from "react-router-dom";

function Delete(id, closeDialog) {
  const [state, dispatch] = useReducer(reducer, init);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE_ALERT" });
  };

  const history = useHistory();
  const handleDelete = (e) => {
    e.preventDefault();

    if (id !== "") {
      dispatch({ type: "REQUEST_LOADING" });
      request.deletePayment(id).then(
        (response) => {
          if (response.data.status === "success") {
            dispatch({
              type: "REQUEST_SUCCESS",
              payload: response.data.data,
              message: "Deleted successfully",
            });

            //Auto reload
            history.go(0);
          } else {
            dispatch({ type: "REQUEST_FAILED", message: response });
          }
          closeDialog();
        },
        (error) => {
          dispatch({ type: "REQUEST_ERROR", message: error });
          closeDialog();
          console.log(id);
        }
      );
    }
  };

  return [state, handleDelete, handleClose];
}

export default Delete;
