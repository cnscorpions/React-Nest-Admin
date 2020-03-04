import axios from "axios";

// create a axios instance
const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
});
