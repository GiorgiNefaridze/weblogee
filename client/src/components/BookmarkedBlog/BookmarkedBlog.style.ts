import styled from "styled-components";

export const BookmarkedBlogWrapper = styled.div`
  width: 100%;
  height: 38%;
  display: flex;
  padding: 0.5rem;
  box-sizing: border-box;
  background-color: #ebebeb47;
  border-radius: 8px;
  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    width: 45%;
    height: 250px;
  }

  &:hover {
    background-color: #ededed;
  }

  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const Body = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-wrap: break-word;
  padding: 0.5rem;
  box-sizing: border-box;

  p {
    font-weight: bold;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const UserDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0 10px;

  h3 {
    &::first-letter {
      text-transform: uppercase;
    }
  }

  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;
