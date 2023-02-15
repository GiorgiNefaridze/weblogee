import { FC, useState, useEffect, useRef } from "react";

import BlogCard from "../BlogCard/BlogCard";
import Loader from "../Loader/Loader";
import { useFetchBlogs } from "../../hooks/useFetchBlogs";
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

  // const [loader, setLoader] = useState<boolean>(true);

  const BlogContainerRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   (async () => {
  //     setLoader(true);
  //     setBlogByCategory(
  //       await useFetchBlogs(
  //         selectCategory.length ? selectCategory : null,
  //         filterKey?.length ? filterKey : null
  //       )
  //     );
  //     setLoader(false);
  //   })();
  // }, [selectCategory.length, filterKey?.length]);
  console.log(filterKey);

  // useEffect(() => {
  //   if (selectCategory.length && !blogByCategory.length) {
  //     setNotFoundedBlogs(true);
  //   } else {
  //     setNotFoundedBlogs(false);
  //   }
  // }, [selectCategory?.length, blogByCategory?.length]);

  return (
    <BlogWrapper>
      <ArticlesWrapper>
        {/* {loader && <Loader />} */}
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
