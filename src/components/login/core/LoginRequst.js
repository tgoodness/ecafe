import { useReducer } from 'react';
import { useHistory } from 'react-router-dom';

import util from '../../../lib/service/util';
import request from '../../../lib/http/requests';
import { init, reducer } from '../../../lib/reducer/post';
import auth from '../../../lib/config/auth';

function Request(email, password) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: 'CLOSE_ALERT' });
  };

  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, init);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (util.isEmail(email) && util.isStrongPassword(password)) {
      dispatch({ type: 'REQUEST_LOADING' });

      request.login(email, password).then(
        (response) => {
          if (response.data.status === 'success') {
            dispatch({ type: 'REQUEST_SUCCESS' });

            //Save admin data here
            util.setSession('admin', response.data.data, true);
            auth.login(() => {
              history.push('/dashboard');
            });
          } else {
            dispatch({ type: 'REQUEST_FAILED', message: response });
          }
        },
        (error) => {
          dispatch({ type: 'REQUEST_ERROR', message: error });
        }
      );
    }
  };

  return [state, handleSubmit, handleClose];
}

export default Request;
