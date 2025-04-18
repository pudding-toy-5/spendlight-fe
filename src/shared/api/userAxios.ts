import axios, { AxiosError } from 'axios';

import { TOKEN_KEY } from '@/constants';

const userAxios = axios.create();

userAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY) ?? '';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error as AxiosError)
);

export default userAxios;
