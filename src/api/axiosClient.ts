import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { BACKEND_URL } from "../constant/backend-domain";

const axiosClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config: AxiosRequestConfig) : any {
      // Attach token to request if exists
      // Refresh token
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        config.headers = {
          ...(config.headers as Record<string, string>),
          Authorization: `Bearer ${accessToken}`,
        };
      }
  
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Transform data for all responses
    return response;
  },
  function (error: AxiosError) {
    if (!error.response) throw new Error("Network error. Please try again later.");

    // Redirect to login if not logged in
    if (error.response.status === 401) {
      // Clear token, logout
      // ...
      window.location.assign("/login.html");
      return;
    }

    // Any status codes that fall outside the range of 2xx trigger this function
    // Do something with the response error
    return Promise.reject(error);
    // throw new Error(error);
  }
);

export default axiosClient;
