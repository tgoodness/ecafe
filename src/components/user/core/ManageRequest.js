import { useReducer } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { manageDisable } from '../../../lib/http/users';
import { init, reducer } from '../../../lib/reducer/post';
import * as type from '../../../lib/reducer/action-type';

function Request(lock, registrationId, handleCancel) {
  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: type.CLOSE_ALERT });
  };

  const [state, dispatch] = useReducer(reducer, init);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(manageDisable, {
    onMutate: () => {
      dispatch({ type: type.LOADING });
    },
    onError: (error) => {
      dispatch({ type: type.ERROR, message: error });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries('user');
      dispatch({ type: type.SUCCESS, message: data });
      handleCancel();
    },
  });

  const handleSubmit = () => {
    const params = { action: lock, registrationId };

    mutate(params);
  };

  return [state, handleSubmit, handleClose];
}

export default Request;
