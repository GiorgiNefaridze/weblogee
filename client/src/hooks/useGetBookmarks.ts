import { axiosInstance } from "../api/axiosInstance";

export const getBookmarks = async () => {
  try {
    const {
      data: { response },
    } = await axiosInstance().get("api/blogs/getBookmarks");

    return response;
  } catch (error) {
    return error?.response?.data.error;
  }
};
