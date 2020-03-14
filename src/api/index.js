import axios from "axios";
import { service, uploadService } from "../utils/request";

const host =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:23000"
    : "https://react-nestjs-admin.xyz";

// ajax req for login to get token
const checkAuth = (username, password) => {
  return axios.post(`${host}/login`, {
    username: username,
    password: password
  });
};

const getProfile = () => {
  return service.get(`${host}/profile`);
};

const uploadEbook = data => {
  return uploadService.post(`${host}/ebook/upload`, data);
};

const getEbookList = () => {
  return service.get(`${host}/ebook/list`);
};

export { checkAuth, getProfile, uploadEbook, getEbookList };
