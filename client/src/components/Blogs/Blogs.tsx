import { FC, useState, useEffect } from "react";

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
} from "./Blogs.style";

const category: string[] = [
  "design",
  "development",
  "devops",
  "UI/UX",
  "marketing",
];

const Blogs: FC = () => {
  const [blogCards, setBlogCards] = useState<IData[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [selectCategory, setSelectCategory] = useState<string[]>([]);
  const [blogByCategory, setBlogByCategory] = useState<IData[]>([]);

  useEffect(() => {
    (async () => {
      setBlogCards(await useFetchBlogs());
      setLoader(false);
    })();
  }, []);

  useEffect(() => {
    if (!selectCategory.length) {
      setBlogByCategory(blogCards);
      return;
    }

    for (let cat of selectCategory) {
      setBlogByCategory(
        blogCards?.filter(({ categories }) => categories.includes(cat))
      );
    }
  }, [selectCategory, blogCards]);

  return (
    <BlogWrapper>
      <ArticlesWrapper>
        {loader && <Loader />}
        <Filtering
          setSelectCategory={setSelectCategory}
          selectCategory={selectCategory}
          category={category}
        />
        <BlogsWrapper>
          {blogByCategory?.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </BlogsWrapper>
      </ArticlesWrapper>
      <DetailsWrapper></DetailsWrapper>
    </BlogWrapper>
  );
};

export default Blogs;
