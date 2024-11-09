import axios from "axios"

const axiosInstance = axios.create({
  // local instace of firebase instance
  // baseURL: "http://127.0.0.1:5001/clone-f2471/us-central1/api",

  // deployed version of amazon server on render.com
  baseURL:"https://amazon-backend-fpbn.onrender.com"
});

export {axiosInstance}