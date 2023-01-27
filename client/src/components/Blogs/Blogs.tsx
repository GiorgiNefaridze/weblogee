import { FC } from "react";

import Filtering from "../Filtering/Filtering";

import { BlogWrapper, ArticlesWrapper, DetailsWrapper } from "./Blogs.style";

const Blogs: FC = () => {
  return (
    <BlogWrapper>
      <ArticlesWrapper>
        <Filtering />
      </ArticlesWrapper>
      <DetailsWrapper></DetailsWrapper>
    </BlogWrapper>
  );
};

export default Blogs;
