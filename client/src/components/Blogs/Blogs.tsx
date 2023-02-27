import { FC, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import BlogCard from "../BlogCard/BlogCard";
import Loader from "../Loader/Loader";
import useFetchBlogs from "../../hooks/useFetchBlogs";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Filtering from "../Filtering/Filtering";
import { IData } from "../../hooks/useFetchBlogs";
import { BlogContext } from "../../context/blogContext";

import Notes from "../../../public/notes.jpg";
import {
  BlogWrapper,
  ArticlesWrapper,
  DetailsWrapper,
  BlogsWrapper,
  NoContentWrapper,
  BannerWrapper,
  BookmarkedBlogs,
  SeenedBlogs,
} from "./Blogs.style";

const Blogs: FC = () => {
  const [notFoundedBlogs, setNotFoundedBlogs] = useState<boolean>(false);
  const [filterKey, setFilterKey] = useState<string>("");

  const BlogContainerRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

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
  const handelClick = () => {
    navigate("/register");
  };

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
      <DetailsWrapper>
        <BannerWrapper>
          <div>
            <h1>Read And Share Your Daily Article</h1>
            <p>Get unlimited access</p>
            <button onClick={handelClick}>Sign Up</button>
          </div>
          <img src={Notes} />
        </BannerWrapper>
        <BookmarkedBlogs>
          <h1>Blogs You Have Seen</h1>
          <SeenedBlogs></SeenedBlogs>
        </BookmarkedBlogs>
      </DetailsWrapper>
    </BlogWrapper>
  );
};

export default Blogs;
