import { useEffect, useReducer, useRef } from "react";
import { init, reducer } from "../../reducers/fetch-array";
import request from "../../https/request";

function Banks() {
  const [state, dispatch] = useReducer(reducer, init);
  const mounted = useRef(true);
  useEffect(() => {
    dispatch({ type: "REQUEST_LOADING" });
    request
      .accountBalance()
      .then(
        (response) => {
         
          if (mounted.current) {
            if (response.banks.data.status === "success") {
              dispatch({
                type: "REQUEST_SUCCESS",
                payload: response.banks.data.data,
              });
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
      )
      .catch(e => {
        console.log("Error at " + e);
      });

    return () => {
      mounted.current = false;
    };
  }, [mounted]);

  return [state];
}

export default Banks;
