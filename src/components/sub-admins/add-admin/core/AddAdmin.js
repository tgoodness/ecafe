import { useReducer } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { addAdmin } from '../../../../lib/http/admin';
import { init, reducer } from '../../../../lib/reducer/post';
import * as type from '../../../../lib/reducer/action-type';
import util from '../../../../lib/service/util';

function Request(email, role, handleCancel) {
  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: type.CLOSE_ALERT });
  };

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(reducer, init);

  const queryClient = useQueryClient();
  const { mutate } = useMutation(addAdmin, {
    onMutate: () => {
      dispatch({ type: type.LOADING });
    },
    onError: (error) => {
      dispatch({ type: type.ERROR, message: error });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries('admins');
      dispatch({ type: type.SUCCESS, message: data });
      handleCancel();
    },
  });

  const handleSubmit = () => {
    if (email === '' || role === '') {
      dispatch({ type: type.VALIDATE, message: 'All fields are required' });
      return;
    }

    if (!util.isEmail(email)) {
      dispatch({ type: type.VALIDATE, message: 'Invalid email address' });
      return;
    }

    const params = { email, role };
    mutate(params);
  };

  return [state, handleSubmit, handleClose];
}

export default Request;
