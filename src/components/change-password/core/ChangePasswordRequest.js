import { useReducer } from 'react';
import { useMutation } from 'react-query';

import { changePassword } from '../../../lib/http/admin';
import { init, reducer } from '../../../lib/reducer/post';
import * as type from '../../../lib/reducer/action-type';
import misc from '../../../lib/service/misc';

function Request(currentPassword, newPassword, confirm, handleCancel) {
  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: type.CLOSE_ALERT });
  };

  const [state, dispatch] = useReducer(reducer, init);
  const { mutate } = useMutation(changePassword, {
    onMutate: () => {
      dispatch({ type: type.LOADING });
    },
    onError: (error) => {
      dispatch({ type: type.ERROR, message: error });
    },
    onSuccess: (data) => {
      dispatch({ type: type.SUCCESS, message: data });
      setTimeout(() => {
        handleCancel();
      }, 2000);
    },
  });

  const handleSubmit = () => {
    if (currentPassword === '' || newPassword === '' || confirm === '') {
      dispatch({ type: type.VALIDATE, message: 'All field are required' });
      return;
    }

    if (newPassword !== confirm) {
      dispatch({ type: type.VALIDATE, message: 'Password mismatch!' });
      return;
    }

    const registrationId = misc.registrationId();
    const params = { currentPassword, newPassword, registrationId };
    mutate(params);
  };

  return [state, handleSubmit, handleClose];
}

export default Request;
