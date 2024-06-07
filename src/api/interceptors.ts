import { getAccessToken, removeFromStorage } from '@/services/auth.token.service';
import { authService } from '@/services/auth.service';
import axios, { type CreateAxiosDefaults } from 'axios';

export const BASE_URL = 'http://localhost:5106/api';

const options:CreateAxiosDefaults = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
}

const axiosClassic = axios.create(options);

const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use(config => {
  const accessToken = getAccessToken()
  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
});

axiosWithAuth.interceptors.response.use((config) => config, async (err) => {
  const originRequest = err.config;

  if (err.response.status === 401 && err.config && !err.config._isRetry) {
    originRequest._isRetry = true;
    try {
      await authService.getNewTokens()
      return axiosWithAuth.request(originRequest)
    } catch (e) {
      if (errorCatch(err) === 'jwt expired') {
        removeFromStorage();
      }
      console.log(e);
    }
  }
  throw err;
}) 

export {axiosClassic, axiosWithAuth}