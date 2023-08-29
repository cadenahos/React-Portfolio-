import axios from "axios";
import { api, version } from "@enviroment";

export const axiosClient = axios.create({
  baseURL: `${process.env.API_URL}${process.env.API_VERSION}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res.status == 401) {
      window.location.href = "";
    }
    console.error("Looks like there was a problem. Status Code:" + res.status);
    return Promise.reject(error);
  }
);

export default axiosClient;
