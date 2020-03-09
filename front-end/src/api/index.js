import axios from "axios";
import service from "../utils/request";

// ajax req for login to get token
const checkAuth = (username, password) => {
  return axios.post("http://localhost:23000/login", {
    username: username,
    password: password
  });
};

const getProfile = () => {
  return service.get("http://localhost:23000/profile");
};

export { checkAuth, getProfile };
