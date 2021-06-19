import { useReducer } from "react";
import { useHistory } from "react-router-dom";
import fn from "../../services/func";
import { init, reducer } from "../../reducers/post-data";
import auth from "../../config/Auth";
import request from "../../https/request";

function useLogin(email, password) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE_ALERT" });
  };

  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, init);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (fn.isEmail(email) && fn.isStrongPassword(password)) {
      dispatch({ type: "REQUEST_LOADING" });

      request.login(email, password).then(
        (response) => {
          if (response.data.status === "success") {
            dispatch({ type: "REQUEST_SUCCESS" });

            //Save admin data here
            fn.setSession("admin", response.data.data, true);
            auth.login(() => {
              history.push("/dashboard");
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

export default useLogin;
