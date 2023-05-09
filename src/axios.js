import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const $api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : undefined;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    if (
      err instanceof AxiosError &&
      err.response.status === 401 &&
      err.config
    ) {
      const { data } = await axios.get(API_BASE_URL + '/auth/refresh', {
        withCredentials: true,
      });
      window.localStorage.setItem('token', data.accessToken);
      return $api.request(err.config);
    }
    throw err;
  }
);
