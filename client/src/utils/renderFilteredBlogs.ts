import { IData } from "../hooks/useFetchBlogs";

export const filteredBlogs = (array: IData[], filterKey: string) => {
  return array?.filter((blog: IData) => {
    if (blog?.title.includes(filterKey)) {
      return blog;
    }
    return;
  });
};
