import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px 0;
  padding: 10px 0;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 20px;
  background-color: #ebebeb47;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: #e1e1e147;
    transition: All 0.5s;
    cursor: pointer;
  }
`;

export const BlogHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 15px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }

  h3 {
    font-weight: bold;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const BlogContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  div {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 15px 0;
    padding: 10px 10px 0 0;
    box-sizing: border-box;

    p {
      font-size: 18px;
    }
  }

  img {
    width: 25%;
    height: 150px;
    object-fit: contain;
    border-radius: 10px;
    cursor: pointer;
  }

  h2 {
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1.5px;
  }
`;

export const BlogCategories = styled.div`
  width: 100%;
  display: flex;
  gap: 0 5px;

  div {
    background-color: #727272;
    color: white;
    font-family: "Roboto", sans-serif;
    border-radius: 20px;
    padding: 10px 15px;
    font-size: 13px;
    cursor: pointer;
  }

  &::first-letter {
    text-transform: uppercase;
  }
`;
