import axios from "axios";

export const CustomAxios = axios.create({
  baseURL: "http://api.bcms.kro.kr/api",
  withCredentials: true,
});

CustomAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

CustomAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error?.response?.data?.message);
    if (error?.response?.status === 401) {
    }
    return Promise.reject(error);
  }
);
