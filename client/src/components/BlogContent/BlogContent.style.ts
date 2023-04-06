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

  @media only screen and (max-width: 1600px) {
    width: 80%;
  }

  @media only screen and (max-width: 1000px) {
    width: 90%;
  }

  @media only screen and (max-width: 700px) {
    width: 95%;
  }

  @media only screen and (max-width: 500px) {
    padding: 15px;
  }

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

    @media only screen and (max-width: 500px) {
      width: 35%;
    }

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

      @media only screen and (max-width: 1000px) {
        width: 40px !important;
        height: 40px !important;
      }
    }

    span {
      font-size: 1.6rem;
      font-weight: bold;
      letter-spacing: 1px;

      @media only screen and (max-width: 1000px) {
        font-size: 1.2rem;
      }

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
  gap: 20px 0;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px 0;

    &:first-child {
      @media only screen and (max-width: 1600px) {
        display: flex;
        flex-direction: row;
      }

      @media only screen and (max-width: 700px) {
        flex-direction: column;
      }
    }
  }

  img {
    width: 60%;
    height: 50%;
    object-fit: cover;

    @media only screen and (max-width: 1600px) {
      width: 55%;
    }

    @media only screen and (max-width: 700px) {
      width: 100%;
      height: 15rem;
      object-fit: fill;
    }
  }

  h1 {
    font-weight: bold;
    font-size: 2.2rem;
    letter-spacing: 1.2px;

    @media only screen and (max-width: 1600px) {
      padding: 7px;
      font-size: 1.6rem;
    }

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
