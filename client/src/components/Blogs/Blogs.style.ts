import styled from "styled-components";

export const BlogWrapper = styled.div`
  height: 89.3vh;
  display: flex;
  padding: 0 4%;
`;

export const ArticlesWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 3%;
  border-right: 0.1px solid #a1a1a147;
  box-sizing: border-box;
  position: relative;
`;

export const DetailsWrapper = styled.div`
  width: 40%;
  height: 10 0%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding: 1% 3.5%;
  box-sizing: border-box;
  gap: 40px 0;
`;

export const BlogsWrapper = styled.div`
  width: 100%;
  height: 87%;
  display: flex;
  flex-direction: column;
  gap: 35px 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const NoContentWrapper = styled.div`
  color: grey;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  margin: auto;
`;

export const BannerWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto", sans-serif;
  padding: 1.5rem;
  box-sizing: border-box;
  background-color: #ededed;
  border-radius: 15px;

  div {
    width: 60%;
    line-height: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
      font-weight: bold;
      font-size: 2rem;
    }

    p {
      color: grey;
      opacity: 0.8;
      font-size: 13px;
    }

    button {
      width: 100%;
      color: white;
      border: none;
      border-radius: 4px;
      background-color: #505050;
      outline: none;
      padding: 12px 15px;
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;

      &:hover {
        background-color: black;
      }
    }
  }

  img {
    width: 10rem;
    height: 10rem;
  }
`;

export const BookmarkedBlogs = styled.div`
  width: 80%;
  background-color: red;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: bold;
    font-size: 2rem;
  }
`;

export const Bookmarked = styled.div``;
