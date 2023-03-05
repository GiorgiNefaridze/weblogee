import { axiosInstance } from "../api/axiosInstance";

export const checkBookmarks = async (blog_id: string): Promise<number> => {
  const {
    data: { status },
  } = await axiosInstance().post("/api/blogs/checkBookmarks", { blog_id });
  return status;
};
