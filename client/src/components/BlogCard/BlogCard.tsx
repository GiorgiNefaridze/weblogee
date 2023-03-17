import { FC, useEffect, useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { VscBookmark } from "react-icons/vsc";

import NoImage from "../../../public/no_image.jpg";
import { IData } from "../../hooks/useFetchBlogs";
import { checkBookmarkedBlogs } from "../../utils/checkBookmarkedBlogs";
import { UserContext } from "../../context/userContext";
import { checkBookmarks } from "../../hooks/useCheckBookmarks";
import { axiosInstance } from "../../api/axiosInstance";

import {
  BlogCategories,
  BlogContent,
  BlogHeader,
  CardWrapper,
} from "./BlogCard.style";

interface IProps extends IData {
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const BlogCard: FC<IProps> = (props) => {
  const {
    title,
    avatar,
    categories,
    content,
    image,
    name,
    date,
    _id,
    setSelected,
  } = props;

  const navigate = useNavigate();

  const { fill, checkedInBookmarked, setFill } = checkBookmarkedBlogs(_id);
  const { user } = UserContext();

  const bdate = new Date(date);
  const blogdate = bdate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const handleClick = () => {
    const { setSelected, ...rest } = props;
    navigate(`/blog/${title}`, { state: { ...rest, date: blogdate } });
  };

  const setBlogInBookmarked = async () => {
    try {
      const {
        data: { status },
      } = await axiosInstance().post("/api/blogs/setBookmarks", {
        blog_id: _id,
      });

      setSelected((prev) => !prev);
      if (status === 200) {
        setFill(false);
      } else {
        setFill(true);
      }
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (!user?.auth) {
      setFill(false);
    }
    checkedInBookmarked();
  }, [user?.auth]);

  return (
    <CardWrapper>
      <BlogHeader>
        <div>
          {avatar && <img src={avatar} alt="avatar" title={name} />}
          {!avatar && <FaUserCircle size={35} />}
          <h3>{name}</h3>
          <p>●</p>
          {blogdate && <p>{blogdate.toString()}</p>}
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
      </BlogHeader>
      <BlogContent onClick={handleClick}>
        <div>
          <h2>{title.length > 50 ? title.slice(0, 50) + "..." : title}</h2>
          <p>
            {content?.length > 50 ? content?.slice(0, 50) + "..." : content}
          </p>
        </div>
        <img src={image ? image : NoImage} alt="banner" />
      </BlogContent>
      <BlogCategories>
        {categories?.map((cat, idx) => (
          <div key={idx}>{cat}</div>
        ))}
      </BlogCategories>
    </CardWrapper>
  );
};

export default BlogCard;
