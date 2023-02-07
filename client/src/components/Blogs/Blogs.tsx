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
  NoContent,
} from "./Blogs.style";

const category: string[] = [
  "design",
  "development",
  "devops",
  "UI/UX",
  "marketing",
];

const Blogs: FC = () => {
  const [blogCards, setBlogCards] = useState<IData[]>([]); //all Blogs
  const [blogByCategory, setBlogByCategory] = useState<IData[]>([]); //Blogs filter by category
  const [noCategoryBlog, setNoCategoryBlog] = useState<boolean>(false); //Checker of no category
  const [selectCategory, setSelectCategory] = useState<string[]>([]); //all selected categories

  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setBlogCards(await useFetchBlogs());
      setLoader(false);
    })();
  }, []);

  const filteredData = (data: IData[], key: string[]) => {
    return data.filter((item: IData) =>
      key.every((category: string) => item.categories.includes(category))
    );
  };

  useEffect(() => {
    if (selectCategory.length > 0) {
      setNoCategoryBlog(false);

      const filtered = filteredData(blogCards, selectCategory);

      setBlogByCategory(filtered);
    }

    if (selectCategory.length < 1) {
      setBlogByCategory(blogCards);
    }
  }, [selectCategory, blogCards]);

  useEffect(() => {
    if (selectCategory.length > 0 && blogByCategory.length < 1) {
      setNoCategoryBlog(true);
    }

    if (selectCategory.length < 1 && blogByCategory.length < 1) {
      setNoCategoryBlog(false);
      setBlogByCategory(blogCards);
    }
  }, [selectCategory, blogByCategory]);

  return (
    <BlogWrapper>
      <ArticlesWrapper>
        {loader && <Loader />}
        <Filtering
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          category={category}
        />
        {!noCategoryBlog && (
          <BlogsWrapper>
            {blogByCategory?.map((blog, idx) => (
              <BlogCard key={idx} {...blog} />
            ))}
          </BlogsWrapper>
        )}
        {noCategoryBlog && <NoContent>No Content Found</NoContent>}
      </ArticlesWrapper>
      <DetailsWrapper></DetailsWrapper>
    </BlogWrapper>
  );
};

export default Blogs;
