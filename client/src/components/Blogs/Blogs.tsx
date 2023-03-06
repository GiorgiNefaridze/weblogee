import { FC, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import BlogCard from "../BlogCard/BlogCard";
import Loader from "../Loader/Loader";
import useFetchBlogs from "../../hooks/useFetchBlogs";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Filtering from "../Filtering/Filtering";
import { BlogContext } from "../../context/blogContext";
import { getBookmarks } from "../../hooks/useGetBookmarks";
import { IData } from "../../hooks/useFetchBlogs";

import Notes from "../../../public/notes.jpg";
import NoImage from "../../../public/no_image.jpg";

import {
  BlogWrapper,
  ArticlesWrapper,
  DetailsWrapper,
  BlogsWrapper,
  NoContentWrapper,
  BannerWrapper,
  BookmarkedBlogs,
  Bookmarked,
} from "./Blogs.style";

const Blogs: FC = () => {
  const [res, setRes] = useState("");
  const [bookmakrs, setBookmakrs] = useState([]);
  const [notFoundedBlogs, setNotFoundedBlogs] = useState<boolean>(false);
  const [filterKey, setFilterKey] = useState<string>("");

  const BlogContainerRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  const { fetchBlogs, loader } = useFetchBlogs();
  const { infiniteScroll, page, scrollRef } = useInfiniteScroll();
  const { blogs } = BlogContext();

  infiniteScroll(BlogContainerRef?.current);

  useEffect(() => {
    (async () => {
      const response = await fetchBlogs(page);
      const bookmarkedBlogs = await getBookmarks();
      if (typeof bookmarkedBlogs == "object") {
        setBookmakrs(bookmarkedBlogs);
      }

      if (response?.length > 0) {
        setRes(response);
      }
    })();
  }, [page]);

  useEffect(() => {
    BlogContainerRef?.current?.addEventListener("scroll", infiniteScroll);

    BlogContainerRef?.current?.addEventListener("scroll", () => {
      if (res?.length > 0 && scrollRef.current) {
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

  console.log(bookmakrs);

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
        <BookmarkedBlogs>
          <h1>Blogs You Have Bookmarked</h1>
          <Bookmarked>
            {bookmakrs?.map(({ image, title, content }) => (
              <div>
                <img src={image ? image : NoImage} />
                <div>
                  <p>{title}</p>
                  <span>{content}</span>
                </div>
              </div>
            ))}
          </Bookmarked>
        </BookmarkedBlogs>
      </DetailsWrapper>
    </BlogWrapper>
  );
};

export default Blogs;
