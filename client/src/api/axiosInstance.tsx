import axios from "axios";

export const axiosInstance = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: { Authorization: `Bearer ${token}` },
  });
};
