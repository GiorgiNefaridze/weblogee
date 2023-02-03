import { FC, useState, useEffect } from "react";

import BlogCard from "../BlogCard/BlogCard";
import { useFetchBlogs } from "../../hooks/useFetchBlogs";
import { IData } from "../../hooks/useFetchBlogs";

import Filtering from "../Filtering/Filtering";

import {
  BlogWrapper,
  ArticlesWrapper,
  DetailsWrapper,
  BlogsWrapper,
} from "./Blogs.style";

const Blogs: FC = () => {
  const [blogcards, setBlogCards] = useState<IData[]>([]);

  useEffect(() => {
    (async () => {
      setBlogCards(await useFetchBlogs());
    })();
  }, []);

  return (
    <BlogWrapper>
      <ArticlesWrapper>
        <Filtering />
        <BlogsWrapper>
          {blogcards?.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </BlogsWrapper>
      </ArticlesWrapper>
      <DetailsWrapper></DetailsWrapper>
    </BlogWrapper>
  );
};

export default Blogs;
