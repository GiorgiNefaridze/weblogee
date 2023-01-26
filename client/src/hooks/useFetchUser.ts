import { axiosInstance } from "../api/axiosInstance";

export const useFetchUser = async () => {
  const { data } = await axiosInstance().post("/api/user/user-data");

  return data;
};
