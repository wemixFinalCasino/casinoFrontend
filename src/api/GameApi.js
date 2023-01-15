/* eslint-disable import/no-anonymous-default-export */
import { authInstance } from "./axiosInstance";

export default {
  get() {
    return authInstance.get("/gameRoom").then((res) => res.data);
  },
};
