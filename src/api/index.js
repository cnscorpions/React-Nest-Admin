import axios from "axios";
import { service, uploadService } from "../utils/request";

const host =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:23000"
    : "https://react-nestjs-admin.xyz";

// ajax req for login to get token
const checkAuth = (username, password) => {
  return axios.post(`${host}/user/login`, {
    username: username,
    password: password
  });
};

// register a user
const registerUser = (username, password) => {
  return axios.post(`${host}/user/signup`, {
    username: username,
    password: password
  });
};

const getProfile = () => {
  return service.get(`${host}/profile`);
};

const uploadFile = data => {
  return uploadService.post(`${host}/file/upload`, data);
};

const getFileList = () => {
  return service.get(`${host}/file/list`);
};

const deleteFile = data => {
  return service.post(`${host}/file/delete`, data);
};

export {
  checkAuth,
  registerUser,
  getProfile,
  uploadFile,
  getFileList,
  deleteFile
};
