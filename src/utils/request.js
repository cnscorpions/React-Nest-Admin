import axios from "axios";
import { getToken, getRoles } from "./storage";

// create a axios instance
const service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
});

// 设置请求次数，请求的间隙
service.defaults.retry = 4;
service.defaults.retryDelay = 1000;

service.interceptors.request.use(config => {
  // if token exists, then added to http header
  if (getToken()) config.headers["Authorization"] = getToken();
  if (getRoles()) config.headers["Roles"] = getRoles();
  return config;
});

// upload via form
const uploadService = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
});

// insert token and set up formData content type
uploadService.interceptors.request.use(config => {
  if (getToken()) config.headers["Authorization"] = getToken();
  if (getRoles()) config.headers["Roles"] = getRoles();
  config.headers["Content-Type"] = "multipart/form-data";
  return config;
});

export { service, uploadService };
