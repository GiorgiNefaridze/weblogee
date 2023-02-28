import { axiosInstance } from "../api/axiosInstance";

export const setBookmarked = async (blog_id: string): Promise<number> => {
  const {
    data: { status },
  } = await axiosInstance().post("/api/blogs/setBookmark", { blog_id });
  return status;
};
