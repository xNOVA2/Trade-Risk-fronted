import axios from "axios";

const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
});

api.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
