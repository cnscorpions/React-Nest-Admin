import axios from "axios";
import service from "../utils/request";

const host =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:23000"
    : "http://120.55.47.104:12833";

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

export { checkAuth, getProfile };
