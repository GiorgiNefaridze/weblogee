import { useState } from "react";

import { isAxiosError } from "axios";
import { axiosInstance } from "../api/axiosInstance";

interface IProps {
  (page: number, categories: string[] | null, key: string | null): Promise<
    IData[] | string
  >;
}
export interface IData {
  name: string;
  avatar: string;
  title: string;
  content: string;
  categories: string[];
  image: string;
}

const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs: IProps = async (page, categories, key) => {
    try {
      const {
        data: { response },
      } = await axiosInstance().get(
        `/api/blogs/getBlogs?page=${page}&categories=${categories}&key=${key}`
      );

      setBlogs(response);
    } catch (error) {
      return isAxiosError(error) ? error?.response?.data.error : "";
    }
  };

  return { fetchBlogs, blogs };
};

export default useFetchBlogs;
