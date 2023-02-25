import { FC, useState, useEffect, useRef } from "react";

import BlogCard from "../BlogCard/BlogCard";
import Loader from "../Loader/Loader";
import useFetchBlogs from "../../hooks/useFetchBlogs";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Filtering from "../Filtering/Filtering";
import { IData } from "../../hooks/useFetchBlogs";
import { BlogContext } from "../../context/blogContext";

import {
  BlogWrapper,
  ArticlesWrapper,
  DetailsWrapper,
  BlogsWrapper,
  NoContentWrapper,
} from "./Blogs.style";

const Blogs: FC = () => {
  const [notFoundedBlogs, setNotFoundedBlogs] = useState<boolean>(false);
  const [filterKey, setFilterKey] = useState<string>("");

  const BlogContainerRef = useRef<HTMLDivElement | null>(null);

  const { fetchBlogs, loader } = useFetchBlogs();
  const { infiniteScroll, page } = useInfiniteScroll();
  const { blogs } = BlogContext();

  infiniteScroll(BlogContainerRef?.current);

  useEffect(() => {
    (async () => {
      fetchBlogs(page);
    })();
  }, [page]);

  useEffect(() => {
    BlogContainerRef?.current?.addEventListener("scroll", infiniteScroll);

    return () => {
      BlogContainerRef?.current?.removeEventListener("scroll", infiniteScroll);
    };
  });

  return (
    <BlogWrapper>
      <ArticlesWrapper>
        {loader && <Loader />}
        <Filtering setFilterKey={setFilterKey} />
        <BlogsWrapper ref={BlogContainerRef}>
          {blogs?.map((blog: IData, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </BlogsWrapper>
        {notFoundedBlogs && (
          <NoContentWrapper>Blog not found!</NoContentWrapper>
        )}
      </ArticlesWrapper>
      <DetailsWrapper></DetailsWrapper>
    </BlogWrapper>
  );
};

export default Blogs;
