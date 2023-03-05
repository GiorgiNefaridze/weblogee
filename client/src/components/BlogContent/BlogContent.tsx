import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsBookmarkFill } from "react-icons/bs";
import { VscBookmark } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import { checkBookmarkedBlogs } from "../../utils/checkBookmarkedBlogs";

import NoImage from "../../../public/no_image.jpg";
import {
  BlogContentWrapper,
  HeaderWrapper,
  ContentWrapper,
} from "./BlogContent.style";

import { axiosInstance } from "../../api/axiosInstance";

const BlogContent: FC = () => {
  const { state } = useLocation();
  const { fill, checkedInBookmarked, setFill } = checkBookmarkedBlogs(
    state?._id
  );

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const setBlogInBookmarked = async () => {
    const {
      data: { status },
    } = await axiosInstance().post("/api/blogs/setBookmarks", {
      blog_id: state?._id,
    });

    if (status === 200) {
      setFill(false);
    } else {
      setFill(true);
    }
  };

  useEffect(() => {
    checkedInBookmarked();
  }, []);

  return (
    <BlogContentWrapper>
      <HeaderWrapper>
        <div>
          <div>
            {state?.avatar && <img src={state?.avatar} title={state?.name} />}
            {!state?.avatar && (
              <FaUserCircle cursor="pointer" size={35} title={state?.name} />
            )}
            <span>{state?.name}</span>
          </div>
          <p>●</p>
          <p>{state?.date}</p>
        </div>
        {!fill && (
          <VscBookmark
            onClick={setBlogInBookmarked}
            cursor="pointer"
            size={20}
          />
        )}
        {fill && (
          <BsBookmarkFill
            onClick={setBlogInBookmarked}
            cursor="pointer"
            size={20}
          />
        )}
      </HeaderWrapper>
      <ContentWrapper>
        {state?.image ? <img src={state?.image} /> : <img src={NoImage} />}
        <h1>
          {state?.title?.length > 30
            ? state?.title.slice(0, 30) + "..."
            : state?.title}
        </h1>
        <div>
          <p>{state?.content}</p>
        </div>
      </ContentWrapper>
      <button onClick={handleClick}>Go back</button>
    </BlogContentWrapper>
  );
};

export default BlogContent;
