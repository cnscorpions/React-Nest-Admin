import axios from "axios";

// ajax req for login to get token
const checkAuth = (username, password) => {
  return axios.post("http://localhost:13000/login", {
    username: username,
    password: password
  });
};

// const getProfile = (userId) => {
// 	return axios.post("http://localhost:13000/profile", {
// 		userId: userId
// 	});
// };

export { checkAuth };
