import axios from "axios";

// ajax req for login to get token
const checkAuth = (username, password) => {
  return axios.post("http://localhost:13000/login", {
    username: username,
    password: password
  });
};

export { checkAuth };
