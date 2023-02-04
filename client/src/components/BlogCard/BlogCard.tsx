import { FC } from "react";
import { FaUserCircle } from "react-icons/fa";

import NoImage from "../../../public/no_image.jpg";
import { IData } from "../../hooks/useFetchBlogs";

import {
  BlogCategories,
  BlogContent,
  BlogHeader,
  CardWrapper,
} from "./BlogCard.style";

const BlogCard: FC<IData> = ({
  title,
  avatar,
  categories,
  content,
  image,
  name,
}) => {
  return (
    <CardWrapper>
      <BlogHeader>
        {avatar && <img src={avatar} alt="avatar" title={name} />}
        {!avatar && <FaUserCircle size={35} />}
        <h3>{name}</h3>
      </BlogHeader>
      <BlogContent>
        <div>
          <h2>{title}</h2>
          <p>
            {content.length > 250 ? content.slice(0, 250) + "..." : content}
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
