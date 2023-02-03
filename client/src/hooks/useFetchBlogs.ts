import { axiosInstance } from "../api/axiosInstance";

export interface IData {
  name: string;
  avatar: string;
  title: string;
  content: string;
  categories: string[];
  image: string;
}

export const useFetchBlogs = async (): Promise<IData[]> => {
  const { data } = await axiosInstance().get("/api/blogs/getBlogs");

  return data;
};
