import * as types from "../actionTypes/index";
import axios from "axios";
import msgService from "../../components/message/message";

// collaspe sidebar or not
const collapseSidebar = () => ({
  type: types.SIDEBAR_COLLAPSE
});

const spreadSidebar = () => ({
  type: types.SIDEBAR_SPREAD
});

// authenticate or not
const authenticate = (token, history) => ({
  type: types.AUTH,
  payload: {
    token: token,
    history: history
  }
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
const login = (username, password, history) => {
  return dispatch => {
    return checkAuth(username, password)
      .then(res => {
        msgService("success", "登录成功！");
        dispatch(authenticate(res.data.token, history));
        history.push("/");
      })
      .catch(error => {
        msgService("error", "输入帐号密码错误");
        console.error(error);
      });
  };
};

export { collapseSidebar, spreadSidebar, authenticate, unauthenticate, login };
