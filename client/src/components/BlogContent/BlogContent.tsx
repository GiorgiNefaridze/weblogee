import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { VscBookmark } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import NoImage from "../../../public/no_image.jpg";
import {
  BlogContentWrapper,
  HeaderWrapper,
  ContentWrapper,
} from "./BlogContent.style";

const BlogContent: FC = () => {
  const { state } = useLocation();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

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
        <VscBookmark cursor="pointer" size={20} />
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
