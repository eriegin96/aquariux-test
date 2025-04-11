import { BASE_URL } from "@/constants/route";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API || BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const { response } = error;

    if (response) {
      // Server responded with a status other than 2xx
      switch (response.status) {
        case 401:
          console.error("Unauthorized");
          break;
        case 403:
          console.error("Access forbidden");
          break;
        case 404:
          console.error("Resource not found");
          break;
        case 500:
          console.error("Server error");
          break;
        default:
          console.error(`Request failed with status code ${response.status}`);
      }
    } else if (error.request) {
      // Request was made but no response was received
      console.error("No response received from the server");
    } else {
      // Something happened in setting up the request
      console.error("Error setting up the request:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
