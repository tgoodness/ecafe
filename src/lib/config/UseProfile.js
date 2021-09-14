import { useReducer, useEffect } from 'react';
import { init, reducer } from '../reducer/get-object';
import * as type from '../reducer/action-type';
import { admin } from '../http/admin';
import misc from '../service/misc';

function useProfile() {
  const registrationId = misc.registrationId();
  const [state, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    if (registrationId === '') {
      return;
    }

    dispatch({ type: type.LOADING });
    admin(registrationId).then(
      (response) => {
        if (response.data.status === 'success') {
          dispatch({
            type: type.SUCCESS,
            payload: response.data.data.admin,
          });
        } else {
          dispatch({ type: type.FAILED, message: response });
        }
      },
      (error) => {
        dispatch({ type: type.ERROR, message: error });
      }
    );
  }, [registrationId]);

  return [state];
}

export default useProfile;
