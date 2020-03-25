// 获取token
const getToken = () => {
  const data = sessionStorage.getItem("persist:root");
  const { auth } = JSON.parse(data);
  const { authToken } = JSON.parse(auth);
  return authToken;
};

// 删除
const removeToken = () => {
  sessionStorage.removeItem("persist:root");
};

// 获取用户名
const getUser = () => {
  const data = sessionStorage.getItem("persist:root");
  const { auth } = JSON.parse(data);
  const { username } = JSON.parse(auth);
  return username;
};

// 获取角色
const getRoles = () => {
  const data = sessionStorage.getItem("persist:root");
  const { auth } = JSON.parse(data);
  const { roles } = JSON.parse(auth);
  return roles;
};

export { getToken, removeToken, getUser, getRoles };
