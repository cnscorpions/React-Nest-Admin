import * as types from "../actionTypes/index";
import * as api from "../../api/index";
import msgService from "../../components/message/message";

// collaspe sidebar or not
const collapseSidebar = () => ({
  type: types.SIDEBAR_COLLAPSE
});

const spreadSidebar = () => ({
  type: types.SIDEBAR_SPREAD
});

// authenticate or not
const authenticate = (username, roles, token, history) => ({
  type: types.AUTH,
  payload: {
    username: username,
    roles: roles,
    token: token,
    history: history
  }
});

const unauthenticate = () => ({
  type: types.AUTH_NOT
});

// login - ajax request
const login = (username, password, history) => {
  return dispatch => {
    return api
      .checkAuth(username, password)
      .then(res => {
        msgService("success", "登录成功！");
        dispatch(
          authenticate(
            res.data.data.username,
            res.data.data.roles,
            res.data.data.token,
            history
          )
        ); // TODO 要封装axios返回结果
        history.push("/");
      })
      .catch(error => {
        msgService("error", "输入帐号密码错误");
        console.error(error);
      });
  };
};

export { collapseSidebar, spreadSidebar, authenticate, unauthenticate, login };
