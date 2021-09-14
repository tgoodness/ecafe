import { useReducer, useRef } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

import { updateProfile } from '../../../lib/http/admin';
import { init, reducer } from '../../../lib/reducer/post';
import * as type from '../../../lib/reducer/action-type';
import util from '../../../lib/service/util';
import misc from '../../../lib/service/misc';

function Request(image) {
  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: type.CLOSE_ALERT });
  };

  const _username = useRef(null);
  const _firstName = useRef(null);
  const _lastName = useRef(null);
  const _phoneNumber = useRef(null);

  // eslint-disable-next-line no-unused-vars
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, init);

  const { mutate } = useMutation(updateProfile, {
    onMutate: () => {
      dispatch({ type: type.LOADING });
    },
    onError: (error) => {
      dispatch({ type: type.ERROR, message: error });
    },
    onSuccess: (data) => {
      dispatch({ type: type.SUCCESS, message: data });
      setTimeout(() => {
        history.push('/');
        history.push('/profile');
      }, 2000);
    },
  });

  const handleSubmit = () => {
    const username = _username.current.value;
    const firstName = _firstName.current.value;
    const lastName = _lastName.current.value;
    const phoneNumber = _phoneNumber.current.value;

    if (username === '' || firstName === '' || lastName === '' || phoneNumber === '') {
      dispatch({ type: type.VALIDATE, message: 'All fields are required' });
      return;
    }

    if (!util.isPhoneNumber(phoneNumber)) {
      dispatch({ type: type.VALIDATE, message: 'Invalid Phone Number' });
      return;
    }

    const registrationId = misc.registrationId();
    let params = {};
    if (image.name === undefined) {
      params = { username, firstName, lastName, phoneNumber, registrationId };
    } else {
      params = { image, username, firstName, lastName, phoneNumber, registrationId };
    }

    mutate(params);
  };

  return [_username, _firstName, _lastName, _phoneNumber, state, handleSubmit, handleClose];
}

export default Request;
