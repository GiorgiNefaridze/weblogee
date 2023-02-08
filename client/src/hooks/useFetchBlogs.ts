import { isAxiosError } from "axios";
import { axiosInstance } from "../api/axiosInstance";

interface IFetchBlogs {
  (content: number): Promise<IData[] | string>;
}
export interface IData {
  name: string;
  avatar: string;
  title: string;
  content: string;
  categories: string[];
  image: string;
}

export const useFetchBlogs: IFetchBlogs = async (content) => {
  try {
    const {
      data: { response },
    } = await axiosInstance().get(`/api/blogs/getBlogs?content=${content}`);

    return response;
  } catch (error) {
    return isAxiosError(error) ? error.response?.data.response : null;
  }
};
