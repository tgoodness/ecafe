import { useReducer } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { manageTransfer } from '../../../lib/http/users';
import { init, reducer } from '../../../lib/reducer/post';
import * as type from '../../../lib/reducer/action-type';

function Request(action, transactionReference, handleCancel) {
  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: type.CLOSE_ALERT });
  };

  const [state, dispatch] = useReducer(reducer, init);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(manageTransfer, {
    onMutate: () => {
      dispatch({ type: type.LOADING });
    },
    onError: (error) => {
      dispatch({ type: type.ERROR, message: error });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries('admin');
      dispatch({ type: type.SUCCESS, message: data });
      setTimeout(() => {
        handleCancel();
      }, 2000);
    },
  });

  const handleSubmit = () => {
    const params = { action, transactionReference };
    mutate(params);
  };

  return [state, handleSubmit, handleClose];
}

export default Request;
