import { useReducer, useRef } from "react";
import { init, reducer } from "../../reducers/post-data";
import request from "../../https/request";
import { useHistory } from "react-router-dom";

function Edit(schoolId, closeModal) {
  const [state, dispatch] = useReducer(reducer, init);
  //Return school name as ref
  const schoolName = useRef(null);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE_ALERT" });
  };

  const history = useHistory();
  const handleEdit = (e) => {
    e.preventDefault();
    const _schoolName = schoolName.current.value;
    if (_schoolName !== "" && schoolId !== "") {
      dispatch({ type: "REQUEST_LOADING" });
      request.editSchool(schoolId, _schoolName).then(
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
          closeModal();
        }
      );
    }
  };

  return [schoolName, state, handleEdit, handleClose];
}

export default Edit;
