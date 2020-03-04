// 获取token
const getToken = () => {
  const data = sessionStorage.getItem("persist:root");
  const { auth } = JSON.parse(data);
  const { authToken } = JSON.parse(auth);
  return authToken;
};

// 删除token
const removeToken = () => {
  sessionStorage.removeItem("persist:root");
};

export { getToken, removeToken };
