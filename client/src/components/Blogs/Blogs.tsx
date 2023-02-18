import { FC, useState, useEffect, useRef } from "react";

import BlogCard from "../BlogCard/BlogCard";
import Loader from "../Loader/Loader";
import useFetchBlogs from "../../hooks/useFetchBlogs";
import { IData } from "../../hooks/useFetchBlogs";

import Filtering from "../Filtering/Filtering";

import {
  BlogWrapper,
  ArticlesWrapper,
  DetailsWrapper,
  BlogsWrapper,
  NoContentWrapper,
} from "./Blogs.style";

const category: string[] = [
  "design",
  "development",
  "devops",
  "UI/UX",
  "marketing",
];

const Blogs: FC = () => {
  const [blogByCategory, setBlogByCategory] = useState<IData[]>([]); //Blogs filter by category
  const [selectCategory, setSelectCategory] = useState<string[]>([]); //all selected categories
  const [filterKey, setFilterKey] = useState<string>("");
  const [notFoundedBlogs, setNotFoundedBlogs] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const [loader, setLoader] = useState<boolean>(true);

  const BlogContainerRef = useRef<HTMLDivElement | null>(null);

  const { fetchBlogs, blogs } = useFetchBlogs();

  const infiniteScroll = (e: any) => {
    if (
      e?.target.scrollTop + e?.target.offsetHeight >
      e?.target.scrollHeight - 1
    ) {
      setPage(page + 5);
    }
  };

  useEffect(() => {
    BlogContainerRef?.current?.addEventListener("scroll", infiniteScroll);

    return () => {
      BlogContainerRef.current?.removeEventListener("scroll", infiniteScroll);
    };
  });

  useEffect(() => {
    (async () => {
      setLoader(true);
      const data = await useFetchBlogs(
        page,
        selectCategory?.length > 0 ? selectCategory : null,
        filterKey?.length > 0 ? filterKey : null
      );

      if (typeof data === "object") {
        setBlogByCategory((prev) => [...prev, ...data]);
      } else {
        setNotFoundedBlogs(true);
      }

      setLoader(false);
    })();
  }, [selectCategory.length, filterKey?.length, page]);

  useEffect(() => {
    if (
      (filterKey?.length || selectCategory?.length) &&
      blogByCategory?.length < 1
    ) {
      setNotFoundedBlogs(true);
    } else {
      setNotFoundedBlogs(false);
    }
  }, [selectCategory?.length, blogByCategory?.length, filterKey?.length]);

  return (
    <BlogWrapper>
      <ArticlesWrapper>
        {loader && <Loader />}
        <Filtering
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          category={category}
          setFilterKey={setFilterKey}
        />
        {blogByCategory?.length ? (
          <BlogsWrapper ref={BlogContainerRef}>
            {blogByCategory?.map((blog, idx) => (
              <BlogCard key={idx} {...blog} />
            ))}
          </BlogsWrapper>
        ) : null}
        {notFoundedBlogs && (
          <NoContentWrapper>Blog not found!</NoContentWrapper>
        )}
      </ArticlesWrapper>
      <DetailsWrapper></DetailsWrapper>
    </BlogWrapper>
  );
};

export default Blogs;
