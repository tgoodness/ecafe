import { API_URL } from './url';
import axios from 'axios';
import misc from '../service/misc';

const requests = {
  formData() {
    return {
      Authorization: 'Bearer ' + misc.accessToken(),
      'content-type': 'multipart/form-data',
    };
  },

  authHeader() {
    return {
      Authorization: 'Bearer ' + misc.accessToken(),
    };
  },

  async login(email, password) {
    const params = { email, password };
    return await axios.post(API_URL, params);
  },

  //fetch crypto Rate, customers bitcoin balance and conversion rate
  cryptoData() {
    return axios.get(API_URL + 'explorer/exchange-rate', {
      headers: this.authHeader(),
    });
  },

  //fetch user biodata,
  user(registrationId) {
    return axios.get(API_URL + 'users/' + registrationId, {
      headers: this.authHeader(),
    });
  },

  async profile(formData, registrationId) {
    return await axios.put(API_URL + 'users/' + registrationId, formData, {
      headers: this.formData(),
    });
  },

  async changePassword(formerPassword, password, pin, registrationId) {
    const params = {
      formerPassword,
      password,
      pin,
      registrationId,
    };

    return await axios.post(API_URL + 'users/change-password', params, {
      headers: this.authHeader(),
    });
  },

  async changePin(currentPin, pin, registrationId) {
    const params = {
      currentPin,
      pin,
      registrationId,
    };

    return await axios.post(API_URL + 'users/change-pin', params, {
      headers: this.authHeader(),
    });
  },

  async disableAccount(operation, registrationId) {
    const params = {
      operation,
    };

    return await axios.put(API_URL + 'users/disable' + registrationId, params, {
      headers: this.authHeader(),
    });
  },

  async transfer(amount, walletAddress, priority, pin, registrationId) {
    const params = {
      amount,
      walletAddress,
      priority,
      pin,
      registrationId,
    };

    return await axios.post(API_URL + 'btc/withdraw', params, {
      headers: this.authHeader(),
    });
  },
};

export default requests;
