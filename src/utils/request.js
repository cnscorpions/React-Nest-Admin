import axios from "axios";
import { getToken } from "./storage";

// create a axios instance
const service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
});

service.interceptors.request.use(config => {
  // if token exists, then added to http header
  if (getToken()) config.headers["Authorization"] = getToken();
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
  config.headers["Content-Type"] = "multipart/form-data";
  return config;
});

export { service, uploadService };
