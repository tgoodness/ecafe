import { API_URL } from './url';
import axios from 'axios';
import { authHeader } from './config';

export const users = () => {
  return axios.get(`${API_URL}users`, {
    headers: authHeader(),
  });
};

export const user = (registrationId) => {
  return axios.get(`${API_URL}users/${registrationId}`, {
    headers: authHeader(),
  });
};

export const manageDisable = (params) => {
  return axios.post(`${API_URL}users/restrictions`, params, {
    headers: authHeader(),
  });
};

export const userP2P = (registrationId) => {
  return axios.get(`${API_URL}btc/txs/${registrationId}`, {
    headers: authHeader(),
  });
};

export const userTransactions = (registrationId) => {
  return axios.get(`${API_URL}btc/${registrationId}`, {
    headers: authHeader(),
  });
};

export const userTradeCrypto = (registrationId) => {
  return axios.get(`${API_URL}btc/txs/${registrationId}`, {
    headers: authHeader(),
  });
};

export const userTransfer = (registrationId) => {
  return axios.get(`${API_URL}btc/txs/${registrationId}`, {
    headers: authHeader(),
  });
};

export const userReceived = (registrationId) => {
  return axios.get(`${API_URL}users/received/${registrationId}`, {
    headers: authHeader(),
  });
};

export const tradeCrypto = () => {
  return axios.get(`${API_URL}btc/txs/bought`, {
    headers: authHeader(),
  });
};

export const p2p = () => {
  return axios.get(`${API_URL}btc/txs/p2p`, {
    headers: authHeader(),
  });
};

export const received = () => {
  return axios.get(`${API_URL}btc/txs/received`, {
    headers: authHeader(),
  });
};

export const transfer = () => {
  return axios.get(`${API_URL}btc/txs/transfer`, {
    headers: authHeader(),
  });
};

export const manageTradeCrypto = (param) => {
  return axios.post(`${API_URL}btc/buy-management`, param, {
    headers: authHeader(),
  });
};

export const manageTransfer = (param) => {
  return axios.post(`${API_URL}btc/transfer-management`, param, {
    headers: authHeader(),
  });
};
