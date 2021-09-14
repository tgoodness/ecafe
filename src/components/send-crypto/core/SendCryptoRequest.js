import { useReducer, useState } from 'react';
import { useMutation } from 'react-query';

import { sendCrypto } from '../../../lib/http/admin';
import { init, reducer } from '../../../lib/reducer/post';
import * as type from '../../../lib/reducer/action-type';
import misc from '../../../lib/service/misc';

function Request(coinType, amount, walletAddress, priority, showModal) {
  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: type.CLOSE_ALERT });
  };

  const [reference, setReference] = useState('');
  const [state, dispatch] = useReducer(reducer, init);
  const { mutate } = useMutation(sendCrypto, {
    onMutate: () => {
      dispatch({ type: type.LOADING });
    },
    onError: (error) => {
      dispatch({ type: type.ERROR, message: error });
    },
    onSuccess: (data) => {
      setReference(data.data.data.transactionUuid);
      dispatch({ type: type.SUCCESS, message: data });
      showModal();
    },
  });

  const handleSubmit = () => {
    if (coinType === '' || amount === '' || walletAddress === '' || priority === '') {
      dispatch({ type: type.VALIDATE, message: 'All field are required' });
      return;
    }

    const registrationId = misc.registrationId();
    const params = { coinType, amount, walletAddress, priority, registrationId };
    mutate(params);
  };

  return [reference, state, handleSubmit, handleClose];
}

export default Request;
