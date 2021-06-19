import { useEffect, useReducer, useRef } from "react";
import { init, reducer } from "../../reducers/fetch-array";
import request from "../../https/request";

function Analysis() {
  const [state, dispatch] = useReducer(reducer, init);
  let mounted= useRef(true);

  useEffect(() => {
    dispatch({ type: "REQUEST_LOADING" });
    request.systemAnalysis().then(
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

    return () => {
    mounted.current = false;
    };
  }, [state.payload, mounted]);

  return [state];
}

export default Analysis;
