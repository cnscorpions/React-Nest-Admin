import axios from "axios";

const whiteUrl = ["/login"];

// create a axios instance
const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
});

// Add a request interceptor
request.interceptors.request.use(
  config => {
    const url = config.url.replace(config.baseURL, "");
    if (whiteUrl.some(wl => url === url)) {
      return config;
    }
    config.headers["token"] = "abcd";
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
