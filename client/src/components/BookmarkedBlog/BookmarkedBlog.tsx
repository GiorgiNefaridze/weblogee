import { FC } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { IData } from "../../hooks/useFetchBlogs";

import NoImage from "../../../public/no_image.jpg";
import {
  Body,
  BookmarkedBlogWrapper,
  UserDetails,
} from "./BookmarkedBlog.style";

const BookmarkedBlog: FC<IData> = (props) => {
  const { avatar, content, date, image, name, title } = props;

  const navigate = useNavigate();

  const bdate = new Date(date);
  const blogdate = bdate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const handleClick = () => {
    navigate(`/blog/${title}`, { state: { ...props, date: blogdate } });
  };

  return (
    <BookmarkedBlogWrapper onClick={handleClick}>
      <img src={image ? image : NoImage} />
      <Body>
        <p>{title.length > 45 ? title.slice(0, 45) + "..." : title}</p>
        <span>
          {content.length > 70 ? content.slice(0, 70) + "..." : content}
        </span>
        <UserDetails>
          {avatar && <img src={avatar} alt="avatar" title={name} />}
          {!avatar && <FaUserCircle size={25} />}
          <h3>{name}</h3>
          {blogdate && <span>{blogdate.toString()}</span>}
        </UserDetails>
      </Body>
    </BookmarkedBlogWrapper>
  );
};

export default BookmarkedBlog;
