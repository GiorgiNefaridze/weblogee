import styled from "styled-components";

export const BlogContentWrapper = styled.div`
  width: 45%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  padding: 2rem;
  margin: 2rem auto;
  box-sizing: border-box;
  background-color: #e1e1e16e;

  button {
    width: 20%;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 4px;
    background-color: #505050c2;
    outline: none;
    padding: 12px 15px;
    font-family: "Roboto", sans-serif;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
      background-color: #040404c2;
    }
  }
`;

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 20px;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;

  div {
    display: flex;
    align-items: center;
    gap: 0 10px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
    }

    span {
      font-size: 1.6rem;
      font-weight: bold;
      letter-spacing: 1px;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  p {
    font-size: 13px;
  }
`;

export const ContentWrapper = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 50px 0;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;

  img {
    width: 60%;
    height: 50%;
    object-fit: cover;
  }

  h1 {
    font-weight: bold;
    font-size: 2.2rem;
    letter-spacing: 1.2px;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  div {
    width: 100%;
    word-wrap: break-word;
    line-height: 25px;
  }
`;
