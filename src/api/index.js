import axios from "axios";
import { service, uploadService } from "utils/request";

const host =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:23000"
    : "https://admin.ligouhai.cn";

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

// 重置密码
const resetPwd = (username, oldPwd, newPwd) => {
  return axios.post(`${host}/user/reset-pwd`, {
    username: username,
    oldPwd: oldPwd,
    newPwd: newPwd
  });
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

const getAllUserUrl = `${host}/user/list`;

const getAllTableList = `${host}/excel/list`;

export {
  checkAuth,
  registerUser,
  resetPwd,
  // getProfile,
  uploadFile,
  getFileList,
  deleteFile,
  getAllUserUrl,
  getAllTableList
};
