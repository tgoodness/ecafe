import fn from '../service/func';
import * as type from './';

export const init = {
  loading: false,
  open: false,
  message: '',
  payload: '',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case type.LOADING:
      return { ...state, loading: true };
    case type.SUCCESS:
      return {
        loading: false,
        open: false,
        message: 'success',
        payload: action.payload,
      };
    case type.FAILED:
      return {
        ...state,
        loading: false,
        open: true,
        message: action.message.data.message,
      };
    case type.ERROR:
      return {
        ...state,
        loading: false,
        open: true,
        message: fn.requestError(action.message),
      };
    case type.CLOSE_ALERT:
      return { ...state, open: false };
    default:
      return state;
  }
};
