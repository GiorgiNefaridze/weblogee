import { useState } from "react";
import { isAxiosError } from "axios";

import { BlogContext } from "../context/blogContext";
import { axiosInstance } from "../api/axiosInstance";

interface IProps {
  (page: number): Promise<IData[] | string>;
}
export interface IData {
  name: string;
  avatar: string;
  title: string;
  content: string;
  categories: string[];
  image: string;
  date: Date;
}

const useFetchBlogs = () => {
  const [loader, setLoader] = useState<boolean>(false);

  const { setBlogs, blogs } = BlogContext();

  const fetchBlogs: IProps = async (page) => {
    setLoader(true);

    try {
      const {
        data: { response },
      } = await axiosInstance().get(`/api/blogs/getBlogs?page=${page}`);

      if (page > 0) {
        setBlogs([...blogs, ...response]);
        setLoader(false);
        return;
      }

      setBlogs([...response]);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      return isAxiosError(error) ? error?.response?.data.error : "";
    }
  };

  return { fetchBlogs, loader };
};

export default useFetchBlogs;
