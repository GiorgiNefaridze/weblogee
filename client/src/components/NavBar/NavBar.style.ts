import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  font-family: "Roboto", sans-serif;
  border-bottom: 0.1px solid #a1a1a147;

  img {
    width: 10rem;
    cursor: pointer;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 20px;

  div {
    display: flex;
    align-items: center;

    span {
      font-weight: 500;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
`;

export const CreateBlog = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5px;
  border: 0.2px solid grey;
  border-radius: 9px;
  padding: 9px;
  cursor: pointer;

  p {
    font-size: 14.5px;
    font-weight: 500;
  }

  span {
    font-size: 18px;
  }

  &:hover {
    background-color: #a1a1a147;
    box-shadow: 7px 5px 14px #f5f5f5;
  }
`;
