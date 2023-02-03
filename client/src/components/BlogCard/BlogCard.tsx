import { FC } from "react";

import { IData } from "../../hooks/useFetchBlogs";

import { BlogContent, BlogHeader, CardWrapper } from "./BlogCard.style";

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
        <img src={avatar} alt="avatar" />
        <h3>{name}</h3>
      </BlogHeader>
      <BlogContent>
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <img src={image} alt="banner" />
      </BlogContent>
      {/* <footer>
        {categories?.map((cat) => (
          <p>{cat}</p>
        ))}
      </footer> */}
    </CardWrapper>
  );
};

export default BlogCard;
