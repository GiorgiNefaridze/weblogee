import styled from "styled-components";

export const BlogWrapper = styled.div`
  height: 89.3vh;
  display: flex;
  padding: 0 4%;
  position: relative;
  box-sizing: border-box;

  @media only screen and (max-width: 1380px) {
    padding: 0 2%;
  }

  @media only screen and (max-width: 1200px) {
    height: auto;
    flex-direction: column;
    gap: 5rem 0px;
    box-sizing: border-box;
  }
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

  @media only screen and (max-width: 1200px) {
    width: 100%;
    border-right: none;
  }
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

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const BlogsWrapper = styled.div`
  width: 100%;
  height: 87%;
  display: flex;
  flex-direction: column;
  gap: 35px 0;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const NoContentWrapper = styled.div`
  color: grey;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  padding: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: auto;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto", sans-serif;
  padding: 1.5rem;
  box-sizing: border-box;
  background-color: #ededed;
  border-radius: 15px;

  @media only screen and (max-width: 1380px) {
    padding: 0.7rem;
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }

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
      font-size: 1rem;
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
  width: 100%;
  height: 100%;
  overflow-y: auto;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 15px 0;

  @media only screen and (max-width: 1200px) {
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }

  h1 {
    font-weight: bold;
    font-size: 2rem;
  }
`;

export const Bookmarked = styled.div`
  width: 90%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px 0;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;
