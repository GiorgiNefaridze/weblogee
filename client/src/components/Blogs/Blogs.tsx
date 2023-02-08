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
  NoContent,
} from "./Blogs.style";

const category: string[] = [
  "design",
  "development",
  "devops",
  "UI/UX",
  "marketing",
];

const filteredData = (data: IData[], key: string[]) => {
  return data.filter((item: IData) =>
    key.every((category: string) => item.categories.includes(category))
  );
};

const Blogs: FC = () => {
  const [blogCards, setBlogCards] = useState<IData[]>([]); //all Blogs
  const [blogByCategory, setBlogByCategory] = useState<IData[]>([]); //Blogs filter by category
  const [noCategoryBlog, setNoCategoryBlog] = useState<boolean>(false); //Checker of no category
  const [selectCategory, setSelectCategory] = useState<string[]>([]); //all selected categories
  const [content, setContent] = useState<number>(0); //indicate content to know when program should fetch data
  const [noContent, setNoContent] = useState<string>("");

  const [loader, setLoader] = useState<boolean>(true);

  const BlogContainerRef = useRef<HTMLDivElement | null>(null);

  const handelScroll = (container: HTMLDivElement) => {
    if (
      container.scrollHeight - container.offsetHeight ===
      container.scrollTop
    ) {
      setContent((prev) => prev + 5);
    } else {
      setNoContent("");
    }
  };

  useEffect(() => {
    (async () => {
      setLoader(true);
      if (!noContent.length) {
        const response = await useFetchBlogs(content);
        if (typeof response == "object") {
          setBlogCards([...blogCards, ...response]);
        } else {
          setNoContent(response);
        }
      }
      setLoader(false);
    })();
  }, [content]);

  useEffect(() => {
    const container = BlogContainerRef?.current;

    container?.addEventListener("scroll", () => handelScroll(container));

    return () => {
      container?.removeEventListener("scroll", () => handelScroll(container));
    };
  }, []);

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
          <BlogsWrapper ref={BlogContainerRef}>
            {typeof blogByCategory === "object" &&
              blogByCategory?.map((blog, idx) => (
                <BlogCard key={idx} {...blog} />
              ))}
          </BlogsWrapper>
        )}
        {noCategoryBlog && <NoContent>No Content Found</NoContent>}
        {noContent.length > 0 && (
          <NoContent style={{ fontSize: "14px" }}>
            {noContent + "..."}
          </NoContent>
        )}
      </ArticlesWrapper>
      <DetailsWrapper></DetailsWrapper>
    </BlogWrapper>
  );
};

export default Blogs;
