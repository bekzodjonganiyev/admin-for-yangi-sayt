import axios from "axios";

export const http = axios.create({
  baseURL: "https://tktiga.onrender.com",
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});
