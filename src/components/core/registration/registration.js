import { useEffect, useReducer } from "react";
import { init, reducer } from "../../reducers/fetch-array";
import request from "../../https/request";

function Registration({ rebuild }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE_ALERT" });
  };

  const [state, dispatch] = useReducer(reducer, init);
  let mounted= true;
  useEffect(() => {
    dispatch({ type: "REQUEST_LOADING" });
    request.registration().then(
      (response) => {
        if (mounted) {
          if (response.data.status === "success")
          {
          
            dispatch({ type: "REQUEST_SUCCESS", payload: response.data.data });
          } else {
            dispatch({ type: "REQUEST_FAILED", message: response });
          }
        }
      },
      (error) => {
        if (mounted) {
          dispatch({ type: "REQUEST_ERROR", message: error });
        }
      }
    );

    return () => {
      mounted = false;
    };
  }, [state.payload, rebuild]);

  return [state, handleClose];
}

export default Registration;
