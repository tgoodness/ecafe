import { useEffect, useReducer, useRef } from "react";
import { init, reducer } from "../../reducers/fetch-array";
import request from "../../https/request";

function ShoolList() {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE_ALERT" });
  };

  const [state, dispatch] = useReducer(reducer, init);
  let mounted = useRef(true);
  useEffect(() => {
    dispatch({ type: "REQUEST_LOADING" });
    request.schoolList().then(
      (response) => {
        if (mounted.current) {
          if (response.data.status === "success") {
            dispatch({ type: "REQUEST_SUCCESS", payload: response.data.data });
          } else {
            dispatch({ type: "REQUEST_FAILED", message: response });
          }
        }
      },
      (error) => {
        if (mounted.current) {
          dispatch({ type: "REQUEST_ERROR", message: error });
        }
      }
    );

    return () => (mounted.current = false);
  }, [mounted, state.payload]);

  return [state, handleClose];
}

export default ShoolList;
