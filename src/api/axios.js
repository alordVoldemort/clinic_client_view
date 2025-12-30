import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://nirmalhealthcare.co.in/clinic-backend-php/api",
  withCredentials: true, // keep true if backend uses cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
