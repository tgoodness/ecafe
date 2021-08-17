import * as type from '/';
import func from '../service/util';

export const init = {
  loading: false,
  open: false,
  message: '',
  success: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case type.LOADING:
      return { ...state, loading: true };
    case type.SUCCESS:
      return {
        loading: false,
        open: true,
        message: action.message.data.message,
        success: true,
      };
    case type.FAILED:
      return {
        loading: false,
        open: true,
        message: action.message.data.message,
        success: false,
      };
    case type.ERROR:
      return {
        loading: false,
        open: true,
        message: func.requestError(action.message),
        success: false,
      };
    case type.CLOSE_ALERT:
      return { ...state, open: false };

    case type.VALIDATE:
      return {
        loading: false,
        open: true,
        message: action.message,
        success: false,
      };
    default:
      return state;
  }
};
