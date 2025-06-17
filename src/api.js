import axios from "axios";
import { jsonParse } from "./helpers";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const userId = jsonParse(localStorage.getItem("user"))?.id;
  if (userId) {
    config.headers = {
      ...config.headers,
      ['user-id']: userId,
    }
  }

  return config;
});

api.interceptors.response.use((response) => {
  return response.data;
});

export default api;
