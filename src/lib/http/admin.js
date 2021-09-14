import { API_URL } from './url';
import axios from 'axios';
import { authHeader, formData } from './config';

export const login = async (param) => {
  return axios.post(`${API_URL}admins/login`, param, {
    headers: authHeader(),
  });
};

export const admin = async (registrationId) => {
  return await axios.get(`${API_URL}admins/${registrationId}`, {
    headers: authHeader(),
  });
};

export const admins = () => {
  return axios.get(`${API_URL}admins`, {
    headers: authHeader(),
  });
};

export const adminActivities = async (registrationId) => {
  return await axios.get(`${API_URL}admins/${registrationId}`, {
    headers: authHeader(),
  });
};

export const addAdmin = (param) => {
  return axios.post(`${API_URL}admins/invite`, param, {
    headers: authHeader(),
  });
};

export const manageDisable = (params) => {
  return axios.post(`${API_URL}admins/restrictions`, params, {
    headers: authHeader(),
  });
};

export const banks = async () => {
  return await axios.get(`${API_URL}banks`);
};

export const updateProfile = async (params) => {
  return await axios.put(`${API_URL}admins`, params, {
    headers: formData(),
  });
};

export const sendCrypto = async (params) => {
  return await axios.post(`${API_URL}btc/admin/airdrop`, params, {
    headers: authHeader(),
  });
};

export const sendCypto = async (params) => {
  return await axios.post(`${API_URL}btc/admin/airdrop`, params, {
    headers: authHeader(),
  });
};

export const confirmsendCypto = async (params) => {
  return await axios.put(`${API_URL}btc/admin/airdrop`, params, {
    headers: authHeader(),
  });
};

export const changePassword = async (params) => {
  return await axios.put(`${API_URL}admins`, params, {
    headers: authHeader(),
  });
};

export const analytics = () => {
  return axios.get(`${API_URL}btc/analytics`, {
    headers: authHeader(),
  });
};

export const activities = () => {
  return axios.get(`${API_URL}admins`, {
    headers: authHeader(),
  });
};

export const manage = () => {
  return axios.get(`${API_URL}admins/restriction`, {
    headers: authHeader(),
  });
};
