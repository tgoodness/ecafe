import { useContext } from 'react';
import { GlobalContext } from '../config/PrivateRoute';

function Global() {
  const state = useContext(GlobalContext);

  const GetState = () => state;
  const Success = () => {
    if (GetState().success) return true;
    else return false;
  };

  const GetAdmin = () => {
    if (Success()) {
      return GetState().payload;
    }
    return false;
  };

  const GetImage = () => {
    if (Success()) {
      return GetState().payload.image;
    }
    return '';
  };

  return {
    Success,
    GetAdmin,
    GetImage,
  };
}

export default Global;
