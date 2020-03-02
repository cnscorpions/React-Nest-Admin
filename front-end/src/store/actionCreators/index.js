import * as types from "../actionTypes/index";
import axios from "axios";

// collaspe sidebar or not
const collapseSidebar = () => ({
  type: types.SIDEBAR_COLLAPSE
});

const spreadSidebar = () => ({
  type: types.SIDEBAR_SPREAD
});

// authenticate or not
const authenticate = token => ({
  type: types.AUTH,
  payload: token
});

const unauthenticate = () => ({
  type: types.AUTH_NOT
});

// a ajax req for auth check
const checkAuth = (username, password) => {
  return axios.post("http://localhost:13000/login", {
    username: username,
    password: password
  });
};

// login - ajax request
const login = (username, password) => {
  return dispatch => {
    return checkAuth(username, password)
      .then(res => dispatch(authenticate(res.data.token)))
      .catch(error => dispatch(unauthenticate()));
  };
};

export { collapseSidebar, spreadSidebar, authenticate, unauthenticate, login };
