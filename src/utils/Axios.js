import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3009",
  timeout: 5000,
  timeoutErrorMessage: "try after sometimes",
});

export default axiosInstance;
