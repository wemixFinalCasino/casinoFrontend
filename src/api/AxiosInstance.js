import axios from "axios";

export const axiosInstance = axios.create();

axiosInstance.defaults.validateStatus = (status) => status < 400;
axiosInstance.defaults.baseURL = "https://주소미정/api";
axiosInstance.defaults.timeout = 30000;
