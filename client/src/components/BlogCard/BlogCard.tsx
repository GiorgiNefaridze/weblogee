import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { VscBookmark } from "react-icons/vsc";

import NoImage from "../../../public/no_image.jpg";
import { IData } from "../../hooks/useFetchBlogs";

import {
  BlogCategories,
  BlogContent,
  BlogHeader,
  CardWrapper,
} from "./BlogCard.style";

const BlogCard: FC<IData> = (props) => {
  const { title, avatar, categories, content, image, name, date } = props;

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
    <CardWrapper onClick={handleClick}>
      <BlogHeader>
        <div>
          {avatar && <img src={avatar} alt="avatar" title={name} />}
          {!avatar && <FaUserCircle size={35} />}
          <h3>{name}</h3>
          <p>●</p>
          {blogdate && <p>{blogdate.toString()}</p>}
        </div>
        <VscBookmark size={20} title="Bookmarks" color="grey" />
      </BlogHeader>
      <BlogContent>
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
