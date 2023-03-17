import { FC, useState, useEffect, useRef } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import BlogCard from "../BlogCard/BlogCard";
import Loader from "../Loader/Loader";
import useFetchBlogs from "../../hooks/useFetchBlogs";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import BookmarkedBlog from "../BookmarkedBlog/BookmarkedBlog";
import Filtering from "../Filtering/Filtering";
import getBookmarks from "../../hooks/useFetBookmarks";
import { BlogContext } from "../../context/blogContext";
import { filteredBlogs } from "../../utils/renderFilteredBlogs";
import { IData } from "../../hooks/useFetchBlogs";
import { UserContext } from "../../context/userContext";

import Notes from "../../../public/notes.jpg";

import {
  BlogWrapper,
  ArticlesWrapper,
  DetailsWrapper,
  BlogsWrapper,
  NoContentWrapper,
  BannerWrapper,
  BookmarkedBlogs,
} from "./Blogs.style";

const Blogs: FC = () => {
  const [res, setRes] = useState("");
  const [selected, setSelected] = useState(false);
  const [notFoundedBlogs, setNotFoundedBlogs] = useState<boolean>(false);
  const [filterKey, setFilterKey] = useState<string>("");

  const BlogContainerRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  const { fetchBlogs, loader } = useFetchBlogs();
  const { infiniteScroll, page, scrollRef } = useInfiniteScroll();
  const {
    fetchBookmarkes,
    noBookmarkedBlogs,
    loader: fetching,
    setNoBookmarkedBlogs,
  } = getBookmarks();
  const { user } = UserContext();

  const [animationParent] = useAutoAnimate();

  const { blogs } = BlogContext();
  const filteredBlog = filteredBlogs(blogs, filterKey);

  infiniteScroll(BlogContainerRef?.current);

  useEffect(() => {
    (async () => {
      const response = await fetchBlogs(page);

      if (response?.length > 0) {
        setRes(response);
      }
    })();
  }, [page]);

  useEffect(() => {
    if (!user?.auth) {
      setNoBookmarkedBlogs({ isTrue: false, data: [] });
    }
    (async () => {
      await fetchBookmarkes();
    })();
  }, [selected, user?.auth]);

  useEffect(() => {
    BlogContainerRef?.current?.addEventListener("scroll", infiniteScroll);

    BlogContainerRef?.current?.addEventListener("scroll", () => {
      if (res?.length > 0 && scrollRef.current && filterKey?.length < 1) {
        setNotFoundedBlogs(true);
      } else {
        setNotFoundedBlogs(false);
      }
    });

    return () => {
      BlogContainerRef?.current?.removeEventListener("scroll", infiniteScroll);
    };
  });

  const handelClick = () => {
    navigate("/create");
  };

  return (
    <BlogWrapper>
      <ArticlesWrapper>
        <Filtering setFilterKey={setFilterKey} />
        <BlogsWrapper ref={BlogContainerRef}>
          {loader && <Loader />}
          {filteredBlog?.map((blog: IData, idx) => (
            <BlogCard setSelected={setSelected} key={idx} {...blog} />
          ))}
        </BlogsWrapper>
        {notFoundedBlogs && res?.length && (
          <NoContentWrapper>{res}</NoContentWrapper>
        )}
      </ArticlesWrapper>
      <DetailsWrapper>
        <BannerWrapper>
          <div>
            <h1>Read And Share Your Daily Article</h1>
            <p>Get unlimited access</p>
            <button onClick={handelClick}>Create Article</button>
          </div>
          <img src={Notes} />
        </BannerWrapper>
        <BookmarkedBlogs ref={animationParent}>
          {!noBookmarkedBlogs?.isTrue && !fetching && (
            <h1>Blogs You Have Bookmarked</h1>
          )}

          {!noBookmarkedBlogs?.isTrue &&
            fetching &&
            noBookmarkedBlogs?.data?.map((blog: IData, idx) => (
              <Stack spacing={0.5}>
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={"10rem"}
                />
              </Stack>
            ))}

          {!noBookmarkedBlogs?.isTrue &&
            !fetching &&
            noBookmarkedBlogs?.data?.map((blog: IData, idx) => (
              <BookmarkedBlog key={idx} {...blog} />
            ))}
        </BookmarkedBlogs>
      </DetailsWrapper>
    </BlogWrapper>
  );
};

export default Blogs;
