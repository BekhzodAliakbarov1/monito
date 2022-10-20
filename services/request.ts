import axios from 'axios';
import { API_URL } from 'config/site-settings';
import { loadState } from 'utils/storage';

const request = {
  private: axios.create({ baseURL: API_URL }),
  public: axios.create({ baseURL: API_URL }),
};

request.private.interceptors.request.use((config) => {
  const accessToken = loadState('accessToken');
  if (accessToken) {
    config.headers = {
      ...config.headers,
      Authorization: accessToken,
    };
  }
  config.headers = {
    ...config.headers,
    appId: 123,
  };

  return config;
});

request.private.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
);

export { request };
