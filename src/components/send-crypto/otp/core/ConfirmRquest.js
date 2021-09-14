import { useReducer } from 'react';
import { useMutation } from 'react-query';

import { confirmsendCypto } from '../../../../lib/http/admin';
import { init, reducer } from '../../../../lib/reducer/post';
import * as type from '../../../../lib/reducer/action-type';

function Request(authorizationToken, transactionUuid, handleCancel) {
  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: type.CLOSE_ALERT });
  };

  const [state, dispatch] = useReducer(reducer, init);
  const { mutate } = useMutation(confirmsendCypto, {
    onMutate: () => {
      dispatch({ type: type.LOADING });
    },
    onError: (error) => {
      dispatch({ type: type.ERROR, message: error });
    },
    onSuccess: (data) => {
      dispatch({ type: type.SUCCESS, message: data });
      handleCancel();
    },
  });

  const handleSubmit = () => {
    if (authorizationToken === '') {
      dispatch({ type: type.VALIDATE, message: 'Authorization token is required' });
      return;
    }

    const params = { action: 'APPROVE', authorizationToken, transactionUuid };
    mutate(params);
  };

  return [state, handleSubmit, handleClose];
}

export default Request;
