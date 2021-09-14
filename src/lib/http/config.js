import misc from '../service/misc';

export const formData = () => {
  return {
    Authorization: 'Bearer ' + misc.accessToken(),
    'content-type': 'multipart/form-data',
  };
};

export const authHeader = () => {
  return {
    Authorization: 'Bearer ' + misc.accessToken(),
  };
};
