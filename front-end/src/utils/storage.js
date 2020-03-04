const getToken = () => {
  const data = sessionStorage.getItem("persist:root");
  const { auth } = JSON.parse(data);
  const { authToken } = JSON.parse(auth);
  return authToken;
};

export { getToken };
