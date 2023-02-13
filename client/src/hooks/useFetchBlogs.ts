import { axiosInstance } from "../api/axiosInstance";

interface IProps {
  (categories: string[] | null, key: string | null): Promise<IData[] | []>;
}
export interface IData {
  name: string;
  avatar: string;
  title: string;
  content: string;
  categories: string[];
  image: string;
}

export const useFetchBlogs: IProps = async (categories, key) => {
  const {
    data: { response },
  } = await axiosInstance().get(
    `/api/blogs/getBlogs?categories=${categories}&key=${key}`
  );

  return response;
};
