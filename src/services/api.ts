import axios, { type AxiosInstance } from "axios";
import { API_URL } from "./config";

const createApiInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: API_URL,
  });
};

const api = createApiInstance();

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { api };
