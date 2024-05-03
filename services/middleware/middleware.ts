import axios from "axios";

const getAccessToken = () => {
  return localStorage.getItem("access-token");
};

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
});

api.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessToken();

    config.headers.accessToken = accessToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;