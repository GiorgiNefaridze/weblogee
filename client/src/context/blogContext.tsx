import React, { createContext, useContext, useState } from "react";

import { IData } from "../hooks/useFetchBlogs";

interface IProps {
  children: React.ReactNode;
}

interface IBlogsContext {
  blogs: IData[];
  setBlogs: React.Dispatch<React.SetStateAction<IData[]>>;
}

const blogsContext = createContext<IBlogsContext>({} as IBlogsContext);

export const BlogContext = () => {
  return useContext(blogsContext);
};

export const BlogContextProvider = ({ children }: IProps) => {
  const [blogs, setBlogs] = useState<IData[]>([]);

  return (
    <blogsContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </blogsContext.Provider>
  );
};
