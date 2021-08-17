import func from './util';
import emptyImage from '../assets/empty-photo.png';
import { IMG_URL } from '../http/url';

const misc = {
  accessToken() {
    const user = func.getItem('user', true);
    if (user) {
      const { accessToken } = user;
      return accessToken;
    }
    return '';
  },

  registrationId() {
    const data = func.getItem('user', true);
    if (data) {
      return data.user.registrationId;
    }
    return '';
  },

  user() {
    const data = func.getItem('user', true);
    if (data) {
      return data.user;
    }

    return '';
  },

  text(text) {
    if (text !== null) {
      return text.length > 15 ? text.substring(0, 20) + '...' : text;
    } else {
      return '---';
    }
  },

  userImage(userProfile) {
    const UserImage = userProfile === null ? emptyImage : IMG_URL + userProfile;
    return UserImage;
  },
};

export default misc;
