import util from './util';
import emptyImage from '../assets/empty-photo.png';
import { ADMIN_IMG_URL, USER_IMG_URL } from '../http/url';

const misc = {
  accessToken() {
    const admin = util.getItem('admin', true);
    if (admin) {
      const { accessToken } = admin;
      return accessToken;
    }
    return '';
  },

  registrationId() {
    const data = util.getItem('admin', true);
    if (data) {
      return data.profile.registrationId;
    }
    return '';
  },

  adminImage(img) {
    const profileImage = img === null || img === '' ? emptyImage : `${ADMIN_IMG_URL}${img}`;
    return profileImage;
  },
  userImage(img) {
    const profileImage = img === null || img === '' ? emptyImage : `${USER_IMG_URL}${img}`;
    return profileImage;
  },
};

export default misc;
