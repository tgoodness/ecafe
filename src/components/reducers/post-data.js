import fn from "../services/func";

export const init = {
  loading: false,
  open: false,
  message: "",
  success: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST_LOADING":
      return { ...state, loading: true };
    case "CLOSE_ALERT":
      return { ...state, open: false };
    case "REQUEST_SUCCESS":
      return { loading: false, open: true, message: action.message, success: true };
    case "REQUEST_FAILED":
      return {
        loading:false,
        open: true,
        message: action.message.data.responseMessage,
      };
    case "REQUEST_ERROR":
      return { loading: false, open: true, message: fn.requestError(action.message) };
    default:
      return state;
  }
};
