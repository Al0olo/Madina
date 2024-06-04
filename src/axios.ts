import axios from "axios";
const axiosInstance = axios.create({
  baseURL: process.env.VITE_API_BASE_URL,
});
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => error
);

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;