import axiosClient from "../axios";

export const getBlog = () => {
  return axiosClient.get("/blog");
};
