import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  background-color: blue;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px 0;
  font-family: "Roboto", sans-serif;
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
  }

  img {
    width: 30%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
`;
