import axios from "axios";
const API_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1";

import Cookies from "js-cookie";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
  withCredentials: true,
});

apiClient.interceptors.request.use(
  async (config) => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }
    // Only fetch CSRF token for non-safe methods
    const safeMethods = ["GET", "HEAD", "OPTIONS"];
    if (!safeMethods.includes(config.method.toUpperCase())) {
      let csrfToken = Cookies.get("XSRF-TOKEN");
      if (!csrfToken) {
        await axios.get(`${API_URL}/csrf-token`, {
          withCredentials: true,
        });
        csrfToken = Cookies.get("XSRF-TOKEN");
        if (!csrfToken) {
          throw new Error("Failed to retrieve CSRF token from cookies");
        }
      }
      config.headers["X-XSRF-TOKEN"] = csrfToken;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const jwtToken = localStorage.getItem("jwtToken");
      if (jwtToken) {
        localStorage.removeItem("jwtToken");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
export default apiClient;
