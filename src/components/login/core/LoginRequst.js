import { useReducer } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

import { login } from '../../../lib/http/admin';
import { init, reducer } from '../../../lib/reducer/post';
import * as type from '../../../lib/reducer/action-type';
import auth from '../../../lib/config/auth';
import util from '../../../lib/service/util';

function Request(email, password) {
  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: type.CLOSE_ALERT });
  };

  // eslint-disable-next-line no-unused-vars
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, init);

  const { mutate } = useMutation(login, {
    onMutate: () => {
      dispatch({ type: type.LOADING });
    },
    onError: (error) => {
      dispatch({ type: type.ERROR, message: error });
    },
    onSuccess: (data) => {
      dispatch({ type: type.SUCCESS, message: data });
      util.setItem('admin', data.data.data, true);
      auth.login(() => {
        history.push('/dashboard');
      });
    },
  });

  const handleSubmit = () => {
    if (email === '' || password === '') {
      dispatch({ type: type.VALIDATE, message: 'All fields are required' });
      return;
    }

    if (!util.isEmail(email)) {
      dispatch({ type: type.VALIDATE, message: 'Invalid email address' });
      return;
    }

    const params = { email, password };
    mutate(params);
  };

  return [state, handleSubmit, handleClose];
}

export default Request;
