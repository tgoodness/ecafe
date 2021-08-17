import fn from '../service/util';
import * as type from './';

export const init = {
  loading: false,
  open: false,
  message: '',
  payload: {},
  success: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case type.LOADING:
      return { ...state, open: false };
    case type.SUCCESS:
      return {
        loading: false,
        open: false,
        message: 'success',
        payload: action.payload,
        success: true,
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
