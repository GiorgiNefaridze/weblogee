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
  const [selectCategory, setSelectCategory] = useState<string[]>([]);
  const [notFoundedBlogs, setNotFoundedBlogs] = useState<boolean>(false);
  const [filterKey, setFilterKey] = useState<string>("");

  const BlogContainerRef = useRef<HTMLDivElement | null>(null);

  const { fetchBlogs, loader } = useFetchBlogs();
  const { infiniteScroll, page } = useInfiniteScroll();
  const { blogs, setBlogs } = BlogContext();

  infiniteScroll(BlogContainerRef?.current);

  const fetchData = async (
    page: number,
    selectCategory: string[],
    filterKey: string
  ) => {
    await fetchBlogs(page, selectCategory, filterKey);
  };

  console.log(blogs);

  // useEffect(() => {
  //   if (selectCategory.length < 1) {
  //     console.log("Fe");
  //     setBlogs(blogs);
  //   }
  // }, [selectCategory?.length]);

  useEffect(() => {
    if (page > 0) {
      fetchData(page, selectCategory, filterKey);
    }
  }, [page]);

  useEffect(() => {
    if (selectCategory?.length > 0 && blogs?.length > 0) {
      setBlogs((prev) =>
        prev?.filter(({ categories }) => {
          return selectCategory.every((category) =>
            categories.includes(category)
          );
        })
      );
    }
  }, [blogs.length, selectCategory.length]);

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
        <Filtering
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          setFilterKey={setFilterKey}
        />
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
