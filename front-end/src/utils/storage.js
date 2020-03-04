const getToken = () => {
  const data = sessionStorage.getItem("persist:root");
  const { auth } = data;
  return JSON.parse(auth)["authToken"];
};

export { getToken };
